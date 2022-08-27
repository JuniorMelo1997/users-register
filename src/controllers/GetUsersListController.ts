import {Request, Response} from "express";
import { prismaClient } from "../database/PrismaClient";

export class GetUsersListController{
    async getusers(req: Request, res: Response){
        const users = await prismaClient.users.findMany({select:{id: true, name: true}});

        if(!users){
            return res.status(404).json({message: "No user found"});
        }
        
        return res.status(200).json(users);
    }
}