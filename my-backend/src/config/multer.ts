import crypto from 'crypto';
import multer from 'multer'; //Multer é uma biblioteca Node para lidar com uploads no Express 

import {resolve} from 'path';

//Configuração de upload de arquivos 
export default{
    upload(folder: string){
        return{
            storage: multer.diskStorage({
                destination : resolve(__dirname, '..', '..', folder), // destination → Onde o arquivo será salvo.
                filename : (request, file, callback) => { // filename → Como o arquivo será nomeado.
                    const fileHash = crypto.randomBytes(16).toString("hex"); //Gerando nome único em hexatecimal
                    const fileName = `${fileHash} - ${file.originalname}` //Junta o hash + nome original do arquivo enviado.

                    return callback(null, fileName)
                }
            })
        }
    }
}