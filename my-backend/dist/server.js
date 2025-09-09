"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Middleware do Express para arquivos estaticos - Serve acessar os arquivos que o usuário enviou pelo navegador.
app.use('/files', express_1.default.static(path_1.default.resolve(__dirname, '..', 'tmp')));
//Middleware - Todas as urls vão passar aqui para verificação
app.use((err, req, res, nextfunc) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message,
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});
app.listen(8000, () => console.log('Servidor Online!!!'));
