import { Request, Response } from "express";
import { DetailProjectService } from "../../services/projects/DetailProjectService";

class DetailProjectController{
    async handle(req: Request, res:Response){
        
        const {id} = req.params;

        const detailProjectService = new DetailProjectService()

        const project = await detailProjectService.execute({id});

        return res.json(project)
    }
}

export {DetailProjectController}