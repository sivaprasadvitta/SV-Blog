import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

export const signup = async (req,res)=>{
    console.log(req.body);

    const {email,username,password} = req.body;

    if(!email || !password || !username || username === ''|| password === '' || email === ''){
        return res.status(400).json({message:'All fields are required'});
    }

    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser =new User({
        username,
        email,
        password:hashedPassword,
    });

    try{
        await newUser.save();
        res.json({message:"signup sucessfull"});
    }catch(error){
        res.status(500).json(error.message);
    }
}