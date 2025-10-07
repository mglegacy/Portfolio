import prismaClient from "../../prisma";

interface DeleteProjectRequest{

    id: string;
}

class DeleteProjectService{
    async execute({id}: DeleteProjectRequest){
        const project = await prismaClient.projects.delete({

            where: { id : id
             },
        })
        return(project)
        }
    }

export {DeleteProjectService};