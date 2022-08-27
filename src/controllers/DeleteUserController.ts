import {Request, Response} from "express";
import { prismaClient } from "../database/PrismaClient";

export class DeleteUserController{
    async deleteUser(req: Request, res: Response){
        const {id} = req.body;

        prismaClient.users.delete({where:{
            id: id
        }}).then(()=>{
            return res.status(200).json({message: "User deleted successfully"});
        }).catch((err)=>{
            return res.status(404).json(err);
        });
    }
}