import { Router } from "express";


import { AuthUserController } from "./controllers/users/AuthUserController";
import { CreateUserController } from "./controllers/users/CreateUserController";

const router = Router();

//rotas de usuario
router.post('/user', new CreateUserController().handle)
router.post('/sessions', new AuthUserController().handle)






export {router};