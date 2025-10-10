import { Request, Response } from "express";
import { CreateProjectService } from "../../services/projects/CreateProjectService";

class CreateProjectController{
    async handle(req: Request, res: Response){
        const {title, type_application, banner, description, tecnologies} = req.body

        const createProjectService = new CreateProjectService()
        
        if(!req.file){
            throw new Error("Error Upload")
        }else{
            const {originalname, filename : banner} = req.file;

            const product =  await createProjectService.execute({
            title,
            type_application,
            banner,
            description,
            tecnologies
            });
            return res.json(product)

        }
    }
}

export { CreateProjectController };