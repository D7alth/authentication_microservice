import  express,{Request, Response, NextFunction}  from "express";
const app = express(), 
port = 911;

app.get('/status', (req:Request, res:Response, next:NextFunction) =>{
    res.send({message: 'OK'}).status(200);
})

app.listen(port, ()=>{
    console.log('listening on port ' + port);
})