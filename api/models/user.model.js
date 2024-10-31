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
        default:"https://www.google.com/imgres?q=icon%20default%20profile%20link&imgurl=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fprofile-circle-icon-256x256-cm91gqm2.png&imgrefurl=https%3A%2F%2Ficonduck.com%2Ficons%2F6491%2Fprofile-default&docid=EQ-pSivjYMHyZM&tbnid=p31AVANb2c08vM&vet=12ahUKEwiX07zaqLmJAxWcbPUHHRt_EWYQM3oECBoQAA..i&w=256&h=256&hcb=2&ved=2ahUKEwiX07zaqLmJAxWcbPUHHRt_EWYQM3oECBoQAA",
    }
 },

 {timestamps:true},
);

const User = mongoose.model('User',userSchema);

export default User;