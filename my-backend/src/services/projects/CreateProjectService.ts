import prismaClient from "../../prisma";

interface ProjectsRequest{
    title: string;
    type_application: string;
    banner: string;
    description: string;
    tecnologies: string[];
}


class CreateProjectService{
    async execute({ title, type_application, banner, description,tecnologies}: ProjectsRequest){
        const project = await prismaClient.projects.create({
            data:{
                titulo: title,
                tipo: type_application,
                banner: banner,
                description: description,
                tecnologies: tecnologies,
            }
        })
        return(project)
    }
}

export {CreateProjectService};