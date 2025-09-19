import { Request, Response } from "express";
import { DetailProjectService } from "../../services/projects/DetailProjectService";

class DetailProjectController{
    async handle(req: Request, res:Response){
        
        const detail_id = req.query.id as string;

        const detailProjectService = new DetailProjectService()

        const project = await detailProjectService.execute({
            detail_id
        });

        return res.json(project)
    }
}

export {DetailProjectController}