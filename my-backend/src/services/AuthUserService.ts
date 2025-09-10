import prismaClient from "../prisma";
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface AuthRequest{
    name: string,
    password: string
}

class AuthUserService{
    async execute({name, password}: AuthRequest){
       const user = await prismaClient.user.findFirst({
        where:{
            name: name,
        }
       }) 
       if(!user){
          throw new Error('Name not exists')
       }

       const passwordMatch = await compare(password, user.password)

       if(!passwordMatch){
        throw new Error ('Password not exists')
       }

       const token = sign(
        {
            name: user.name
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: '100d'
        }
       )
       return{
        id:user.id,
        name: user.name,
        token: token
       }
    }
}