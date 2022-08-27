import {Request, Response} from "express";
import { prismaClient } from "../database/PrismaClient";

export class GetUserController{
    async getUser(req: Request, res: Response){
        const id = req.params.id;

        const user = await prismaClient.users.findFirst({where:{
            id: id
        }, select: {
            id: true,
            name: true
        }});

        if(!user){
            return res.status(404).json({message: "No user found"})
        }

        return res.status(200).json(user);
    }
}