import  express,{ Request, Response, NextFunction }  from 'express'
import errorHandler from './middlewares/error-handle';
import userRoutes from './routes/routes-client'
import indexRouter from './routes/routes-index'
const app = express(), 
port = 911;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(userRoutes)
app.use(indexRouter)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log('listening on port ' + port);
})