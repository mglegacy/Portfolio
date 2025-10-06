import prismaClient from "../../prisma";

interface UpdateProjectRequest{
    id: string;
    title: string;
    banner: string;
    type_application: string;
    description: string;
    tecnologies: string;

}

class UpdateProjectService{
    async execute({id, banner, title, type_application, description, tecnologies}: UpdateProjectRequest){
        const project = await prismaClient.projects.update({
            where: { id: id },
            data:{
                titulo: title,
                banner: banner,
                tipo: type_application,
                description: description,
                tecnologies: tecnologies,
            }
        })
        return(project)
      }
 }

export {UpdateProjectService};