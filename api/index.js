import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const port =3000;

app.use(express.json())

//key connection to db
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongoose is connected");
}).catch((err)=>{
    console.log(err);
})

app.use('/api/user',userRouter);
    //response is sending the data
    //sending the data to page

app.use('/api/auth',authRoutes);


app.listen(port,()=>{
    console.log(`Server start at port ${port}`)
})