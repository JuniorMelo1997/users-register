import {Request, Response} from "express"
import { prismaClient } from "../database/PrismaClient";

export class CreateUsersController{
    async create(req:Request, res: Response){
        const {name, email, password} = req.body;

        const userAlreadyExists = await prismaClient.users.findFirst({where:{
            email: email
        }});

        if(!userAlreadyExists){    
            const user = await prismaClient.users.create({data:{
                name, email, password
            }});

            return res.status(201).json({message: "user " + user.name + " created succesfuly"});
        }

        return res.status(409).json({message: "email already in use"})
    }
}