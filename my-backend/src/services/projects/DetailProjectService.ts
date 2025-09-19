import prismaClient from "../../prisma";

interface DetailProject{
    detail_id: string
}

class DetailProjectService{
    async execute({detail_id}: DetailProject){

        const product = await prismaClient.projects.findUnique({
            where:{
                id:detail_id
            }
        })
        return product;

    }
}

export {DetailProjectService}