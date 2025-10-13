import { Request, Response } from "express";
import { CreateProjectService } from "../../services/projects/CreateProjectService";

class CreateProjectController{
    async handle(req: Request, res: Response){
        const {title, type_application, banner, description, tecnologies} = req.body

        const createProjectService = new CreateProjectService()
        
        if(!req.file){
            throw new Error("Error Upload")
        }else{
            const { filename: bannerFile } = req.file;

            // Converter string para array se necessário
            const tecnologiesArray =
                typeof tecnologies === "string"
                ? tecnologies.split(",").map((t) => t.trim())
                : tecnologies;

            const product =  await createProjectService.execute({
            title,
            type_application,
            banner:bannerFile,
            description,
            tecnologies: tecnologiesArray,
            });
            return res.json(product)

        }
    }
}

export { CreateProjectController };