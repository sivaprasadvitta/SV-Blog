import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();



const app = express();
const port =4000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json())

//key connection to db
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongoose is connected");
}).catch((err)=>{
    console.log(err);
})


//routes
app.use('/api/user',userRouter);
    //response is sending the data
    //sending the data to page

app.use('/api/auth',authRoutes);


//creating middleware
app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500;
    const message = err.message || "Internal Server error";
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})


app.listen(port,()=>{
    console.log(`Server start at port ${port}`)
})