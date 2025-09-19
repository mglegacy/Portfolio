import { NextFunction, Request, Response } from "express";
import {verify} from "jsonwebtoken";

interface Payload{
    sub: string,
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction){
    //verficar se enviou o token
    const verifToken = req.headers.authorization;

    if(!verifToken){
        return res.status(401).end();
    }
    //Desconstruindo para pegar apenas o token  [Primeiro item, segundo item[token]]
    const [, token] = verifToken.split(" ")

    try{
        //validando o token com a função verify e a palavra
        const {sub} = verify(
            token,
            process.env.JWT_SECRET,
        ) as Payload;

        req.user_id = sub;
        return next()

        
    } catch(err){
        return res.status(401).end();
    }
}