import { Router, Request, Response, NextFunction } from 'express'; 
const indexRouter = Router();

indexRouter.get('/', (req:Request, res:Response, next:NextFunction) =>{
    res.send({message: 'OK'}).status(200);
})

export default indexRouter;