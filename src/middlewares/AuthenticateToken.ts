import { NextFunction, Request, Response } from "express";
import {verify} from "jsonwebtoken";

function authenticateToken(req: Request, res: Response, next: NextFunction){
    const token = req.header("token");

    require('dotenv').config();
    const secret = String(process.env.SECRET);

    if(!token){
        return res.status(401).json({message: "access denied"});
    }

    function parseJwt(token: string) {
        return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    }
    
    try {
        verify(token, secret);
        const user = parseJwt(token);

        res.locals.tokenId = user.id;

        next();
    } catch (error) {
        return res.status(401).json({message: "access denied"});
    }
}

export {authenticateToken};