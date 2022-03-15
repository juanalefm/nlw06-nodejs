import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}
export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    //Receber o token
    const authToken = request.headers.authorization
    //validar se o token está preenchido
    if(!authToken) {
        return response.status(401).end();
    }
    // validar se o token é valido
    const [,token] = authToken.split(" ");
    try {
    // sub = id do usuario
    const { sub } = verify(token, "8efc1bf3c9d511b26e06428cbc5a3867") as IPayload;
    request.user_id = sub;
    return next();
    } catch (err) {
        return response.status(401).end()
    }
    //recuperar informações do usuario
}