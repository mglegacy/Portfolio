import { Router } from "express";


import { CreateUserController } from "./controllers/users/CreateUserController";

import { LoginUserController } from "./controllers/users/LoginUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

//rotas de usuario
router.post('/user', new CreateUserController().handle) //Rota que cria o usuário e gera token

//rota de Login. (middleware)
router.post('/login', isAuthenticated, new LoginUserController().handle)






export {router};