import {Request, Response} from "express";
import { prismaClient } from "../database/PrismaClient";

export class GetUsersListController{
    async getusers(req: Request, res: Response){
        const users = await prismaClient.users.findMany({select:{name: true}});

        return res.status(200).json(users);
    }
}