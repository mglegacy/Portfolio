import prismaClient from "../../prisma";

interface DetailProject{
    id: string
}

class DetailProjectService{
    async execute({id}: DetailProject){

        const product = await prismaClient.projects.findUnique({
            where:{
                id:id
            }
        })
        return product;

    }
}

export {DetailProjectService}