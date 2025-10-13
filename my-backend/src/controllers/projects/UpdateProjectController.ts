import { Request, Response } from "express";
import { UpdateProjectService } from "../../services/projects/UpdateProjectService";

class UpdateProjectController {

    async handle(req: Request, res: Response) {

        const { id } = req.params;

        const {
            title,
            banner,
            type_application,
            description,
            tecnologies 
        } = req.body;

        // Converter para array se necessário
const tecnologiesArray =
  typeof tecnologies === "string"
    ? tecnologies.split(",").map(t => t.trim())
    : tecnologies;

        const updateProjectService = new UpdateProjectService();

        const project = await updateProjectService.execute({
            id,
            title,
            banner,
            type_application,
            description,
            tecnologies: tecnologiesArray,
        })
        return res.json(project);
    }
}

export { UpdateProjectController };

