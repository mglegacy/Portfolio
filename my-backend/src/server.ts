import  express, {Request, Response, NextFunction} from "express";
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import { router } from './routes' 

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

//Middleware do Express para arquivos estaticos - Serve acessar os arquivos que o usuário enviou pelo navegador.
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'temp'))
)

//Middleware - Todas as urls vão passar aqui para verificação
app.use((err: Error, req: Request, res: Response, nextfunc: NextFunction) => {
    if ( err instanceof Error){
        return res.status(400).json({
            error: err.message, 
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    })
})



app.listen(8000, () => console.log('Servidor Backend Online!!!'))