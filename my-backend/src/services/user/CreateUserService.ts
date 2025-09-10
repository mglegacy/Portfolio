import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    name: string,
    password: string
}

class CreateUserService{
    async execute({name, password} : UserRequest){
        //Verificar se enviou o name
        if(!name){
            throw Error("Name incorrect")
        }

        //Verificar se o email já está cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where : {
                name: name
            }
        })
        if(userAlreadyExists){
            throw Error("Name already exists")
        }

        //Criptografando a senha
        const passwordHash = await hash(password, 8)

        //Adicionar usuário ao banco de dados
        const user = await prismaClient.user.create({
            data:{
                name: name,
                password: passwordHash,
            },
            select:{
                id: true,
                name: true,
            }
        })
        return user;
    }
}

export {CreateUserService};