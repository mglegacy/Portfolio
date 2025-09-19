import{ compare } from 'bcryptjs';
import prismaClient from '../../prisma';
import {Response} from 'express';

interface LoginRequest{
    name: string;
    password: string;
}
class LoginUserService{
    async execute({name, password}: LoginRequest, res:Response){
        //Verificar se o usuário existe
        const user = await prismaClient.users.findFirst({
            where:{
                name: name
            }
        })

        if(!user){

            throw new Error("User incorrect")  

        }
        //Verificar se a senha está correta
        const passwordMatch =await compare(password, user.password);
        if(!passwordMatch)
            {

            throw new Error("Incorrect password")

        }
        return res.status(200).json({
            status: "Success",
            message: 'User logged in successfully',

        }
        )
    }
}
export {LoginUserService};

