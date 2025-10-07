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

        const updateProjectService = new UpdateProjectService();

        const project = await updateProjectService.execute({
            id,
            title,
            banner,
            type_application,
            description,
            tecnologies
        })
        return res.json(project);
    }
}

export { UpdateProjectController };

