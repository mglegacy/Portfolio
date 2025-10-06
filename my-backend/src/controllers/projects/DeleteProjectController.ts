import { Request, Response } from "express";
import { DeleteProjectService } from "../../services/projects/DeleteProjectService";

class DeleteProjectController{

    async handle(req: Request, res: Response) {

        const id = String(req.query.id);

        const DeleteProjectController = new DeleteProjectService();
        await DeleteProjectController.execute;({id});

        return res.json({ message: "Project deleted Successfully" });

    }
}

export { DeleteProjectController };
