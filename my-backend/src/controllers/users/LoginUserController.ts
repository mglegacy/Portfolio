import {Request, Response} from "express"
import { AuthUserService } from "../../services/user/AuthUserService";

class LoginUserController{
    async handle(req: Request, res:Response){
        const {name, password} = req.body;

        //Gerando o token com os dados do usuário
        const authUserService = new AuthUserService();

        const auth =  await authUserService.execute({
            name,
            password,
        });

        return res.json(auth)
    }
}

export {LoginUserController};