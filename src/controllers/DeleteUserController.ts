import {Request, Response} from "express";
import { prismaClient } from "../database/PrismaClient";

export class DeleteUserController{
    async deleteUser(req: Request, res: Response){
        const {id} = req.body;

        const {tokenId} = res.locals

        const verify = tokenId == id;

        if(!verify){
            return res.status(401).json({message: "you have no permission to delete this account"});
        }

        prismaClient.users.delete({where:{
            id: id
        }}).then(()=>{
            return res.status(200).json({message: "User deleted successfully"});
        }).catch((err)=>{
            return res.status(404).json(err);
        });
    }
}