 import { request } from "express";
import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
        unique:true,
    },
    email :{
        type:String,
        request:true,
    },
    password :{
        type:String,
        request:true,
    },
    photoURL:{
        type:String,
        default:"https://www.gravatar.com/avatar",
    }
 },

 {timestamps:true},
);

const User = mongoose.model('User',userSchema);

export default User;