import prismaClient from "../../prisma";
class ListProjectService{
    async execute(){
        const projects = await prismaClient.projects.findMany({
            orderBy:{
                created_at: 'desc'
            }
        })

        return(projects)
    }
}
export {ListProjectService}