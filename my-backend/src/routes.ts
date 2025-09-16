import { Router } from "express";


import { CreateUserController } from "./controllers/users/CreateUserController";

const router = Router();

//rotas de usuario
router.post('/user', new CreateUserController().handle)






export {router};