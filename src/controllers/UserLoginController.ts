import {Request, Response} from "express";
import bcrypt from "bcrypt";
import { prismaClient } from "../database/PrismaClient";

export class UserLoginController{
    async userLogin(req: Request, res: Response){
        const {email, password} = req.body;

        if(!email){
            return res.status(401).json({message: "email is mising"});
        }

        if(!password){
            return res.status(401).json({message: "password is mising"});
        }

        const user = await prismaClient.users.findFirst({where:{
            email: email
        }});

        if(!user){
            return res.status(401).json({message: "email or password incorrect"});
        };

        const correctPassword = await bcrypt.compare(password, user.password);

        if(!correctPassword){
            return res.status(401).json({message: "email or password incorrect"});
        }

        return res.status(200).json(user);
    }
}