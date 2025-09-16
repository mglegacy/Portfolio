import {Request, Response} from "express"
import {CreateUserService} from "../../services/user/CreateUserService"
import { AuthUserService } from "../../services/user/AuthUserService";


class CreateUserController{
    async handle(req: Request, res:Response){
        const {name, password} = req.body;

        //Criando o usuário
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            password,
        });

        //Gerando o token com os dados do usuário
        const authUserService = new AuthUserService();

        const auth =  await authUserService.execute({
            name,
            password,
        });

        return res.json(auth)
    }
}

export {CreateUserController}