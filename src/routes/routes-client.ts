import { Router, Request, Response, NextFunction } from 'express'; 
import UserRepo from '../repo/repo-user'
const userRoutes = Router();


userRoutes.get('/user',async (req:Request, res:Response, next:NextFunction)=>{
    const users = await UserRepo.findAllUsers(); 
    res.json(users).status(200);
})
userRoutes.get('/user/:uuid',async (req:Request<{uuid : string}>, res:Response, next:NextFunction)=>{
    const uuid = req.params.uuid;
    const user = await UserRepo.findById(uuid);
    res.send(user).status(200);

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