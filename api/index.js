import express from 'express'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("mongoose is connected");
})
.catch((err)=>{
    console.log(err);
})

const app = express();
const port =3000;

app.listen(port,()=>{
    console.log(`Server start at port ${port}`)
})