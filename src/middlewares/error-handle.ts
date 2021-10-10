import {Request, Response, NextFunction} from 'express';
import databaseErrModel from '../models/errors/database-err-model';

function errorHandler(err: any, req: Request, res: Response, next:NextFunction){
    if(err instanceof databaseErrModel)res.sendStatus(400);
    else res.sendStatus(500);
}

export default errorHandler;