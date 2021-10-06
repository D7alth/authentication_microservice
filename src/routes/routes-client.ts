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
userRoutes.post('/user', async (req:Request, res:Response, next:NextFunction)=>{
    const newUser = await UserRepo.create(req.body)
    res.status(201).send(newUser);
})
userRoutes.put('/user/:uuid',  async (req:Request<{uuid : string}>, res:Response, next:NextFunction)=>{
    const uuid = req.params.uuid;
    const modifyUser = req.body;
    modifyUser.uuid = uuid;
    await UserRepo.update(modifyUser)
    res.send({message : 'OK'}).status(200);
})
userRoutes.delete('/user/:uuid', async(req:Request<{uuid : string}>, res:Response, next:NextFunction)=>{
    const uuid = req.params.uuid;
    await UserRepo.remove(uuid);
    res.send({message : 'OK'}).sendStatus(200); 
})


export default userRoutes;