import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer"; // Add this import for uploadConfig

import { CreateUserController } from "./controllers/users/CreateUserController";
import { LoginUserController } from "./controllers/users/LoginUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateProjectController } from "./controllers/projects/CreateProjectController";
import { ListProjectcontroller } from "./controllers/projects/ListProjectController";
import { UpdateProjectController } from "./controllers/projects/UpdateProjectController";
import { DetailProjectController } from "./controllers/projects/DetailProjectController";

const router = Router();
const upload = multer(uploadConfig.upload("./temp"))

//rotas de usuario
router.post('/admin/user', new CreateUserController().handle) //Rota que cria o usuário e gera token

//rota de Login. (middleware)
router.post('/admin/login', isAuthenticated, new LoginUserController().handle)

//rota de projetos
router.post('/admin/projects', isAuthenticated, upload.single('banner'), new CreateProjectController().handle)
router.delete('/admin/delete', isAuthenticated, new DeleteProjectController().handle)

router.get('/listprojects', new ListProjectcontroller().handle)

router.get('/detail/:id', new DetailProjectController().handle)

router.put('/admin/update/:id', isAuthenticated, upload.single('banner'), new UpdateProjectController().handle)



export {router};