import { Request , Response } from "express";
import {ListProjectService} from "../../services/projects/ListProjectService";

class ListProjectcontroller{

    async handle (req: Request, res: Response){

        const ListProjectcontroller = new ListProjectService();
        const projects = await ListProjectcontroller.execute();

        return res.json(projects)

    }

}

export {ListProjectcontroller}
