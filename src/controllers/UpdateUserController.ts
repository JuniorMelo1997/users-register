import {Request, Response} from "express";
import { prismaClient } from "../database/PrismaClient";
import bcrypt from "bcrypt";

export class UpdateUserController{
    async updateUser(req: Request, res: Response){
        let {id, name, email, password} = req.body;

        const userExists = await prismaClient.users.findFirst({where:{
            id: id
        }});

        if(!userExists){
            return res.status(404).json({message: "no user found"});
        }

        password = await bcrypt.hash(password, 10);
        
        const updatedUser = await prismaClient.users.update({where: {
            id: id
        }, data:{
            name, email, password
        }});

        return res.status(200).json({message: "User updated successfully"});
    }
}