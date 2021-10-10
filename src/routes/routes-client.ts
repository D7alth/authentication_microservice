import { Router, Request, Response, NextFunction } from 'express'; 
import databaseErrModel from '../models/errors/database-err-model';
import UserRepo from '../repo/repo-user'
const userRoutes = Router();


userRoutes.get('/user',async (req:Request, res:Response, next:NextFunction)=>{
    try{
    const users = await UserRepo.findAllUsers(); 
    res.json(users).status(200);
    }catch(err){console.log(err)}; 
})
userRoutes.get('/user/:uuid',async (req:Request<{uuid : string}>, res:Response, next:NextFunction)=>{
    try{
    const uuid = req.params.uuid;
    const user = await UserRepo.findById(uuid);
    res.send(user).status(200);
    }catch(err){
        next(err);
    }

})
userRoutes.post('/user', async (req:Request, res:Response, next:NextFunction)=>{
    try{
    const newUser = await UserRepo.create(req.body)
    res.status(201).send(newUser);
    }catch(err){console.log(err)};
})
userRoutes.put('/user/:uuid',  async (req:Request<{uuid : string}>, res:Response, next:NextFunction)=>{
    try{
    const uuid = req.params.uuid;
    const modifyUser = req.body;
    modifyUser.uuid = uuid;
    await UserRepo.update(modifyUser)
    res.send({message : 'OK'}).status(200);
    }catch(err){console.log(err)}
})
userRoutes.delete('/user/:uuid', async(req:Request<{uuid : string}>, res:Response, next:NextFunction)=>{
    try{
    const uuid = req.params.uuid;
    await UserRepo.remove(uuid);
    res.send({message : 'OK'}).sendStatus(200); 
    }catch(err) {console.log(err)}
})


export default userRoutes;