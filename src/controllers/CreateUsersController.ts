import {Request, Response} from "express"
import { prismaClient } from "../database/PrismaClient";
import bcrypt from "bcrypt";

export class CreateUsersController{
    async create(req:Request, res: Response){
        let {name, email, password} = req.body;

        const userAlreadyExists = await prismaClient.users.findFirst({where:{
            email: email
        }});

        if(!userAlreadyExists){   
            password = await bcrypt.hash(password, 10);
            
            const user = await prismaClient.users.create({data:{
                name, email, password
            }});

            return res.status(201).json({message: "user " + user.name + " created succesfuly"});
        }

        return res.status(409).json({message: "email already in use"})
    }
}