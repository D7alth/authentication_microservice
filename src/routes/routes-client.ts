import { Router, Request, Response, NextFunction } from 'express'; 
const userRoutes = Router();

userRoutes.get('/user',(req:Request, res:Response, next:NextFunction)=>{
    const users = [{name : 'John', email :'john@zipmail.com'}]; 
    res.json(users).status(200);
})
userRoutes.get('/user/:uuid',(req:Request<{uuid : string}>, res:Response, next:NextFunction)=>{
    const uuid = req.params.uuid;
    res.send({uuid}).status(200);

})
userRoutes.post('/user', (req:Request, res:Response, next:NextFunction)=>{
    const newUser = req.body;
    console.log(newUser);
    res.status(201).send(newUser);
})
userRoutes.put('/user',  (req:Request<{uuid : string}>, res:Response, next:NextFunction)=>{
    const uuid = req.params.uuid;
    const modifyUser = req.body;
    modifyUser.uuid = uuid;

    res.send(modifyUser).status(200);
})
userRoutes.delete('/user', (req:Request<{uuid : string}>, res:Response, next:NextFunction)=>{
    res.sendStatus(200); 
})


export default userRoutes;