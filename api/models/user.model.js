 import { request } from "express";
import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
        unique:true,
    },
    email :{
        type:string,
        request:true,
    },
    password :{
        type:string,
        request:true,
    }
 },

 {timestamps:true},
);

const User = mongoose.model('User',userSchema);

export default User;