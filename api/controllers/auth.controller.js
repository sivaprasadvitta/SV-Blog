import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req,res,next)=>{
    console.log(req.body);

    const {email,username,password} = req.body;

    if(!email || !password || !username || username === ''|| password === '' || email === ''){
        next(errorHandler(400,"All fileds are required"));
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
        // res.status(500).json(error.message);
        next(error);
        
    }
}

//signin

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    // console.log(req.body);

    // Validation for empty fields
    if (!email || !password || email.trim() === '' || password.trim() === '') {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        const validUser = await User.findOne({ email });
        // console.log(validUser);

        // Check if the user exists
        if (!validUser) {
            return next(errorHandler(400, "User not found!"));
        }

        // Compare the password
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, "Invalid Password"));
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: validUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        //seperate the password and send response
        const {password:pass ,...rest} = validUser._doc;

        // Send the token in a cookie
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        }).json(rest);
    } catch (error) {
        return next(error);
    }
};

//google auth api

export const googleAuth = async (req, res, next) => {
    const {email, name, picture} = req.body;

    try {
        const user = await User.findOne({email});

        if(user){
            const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
            const {password, ...rest} = user._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        }else{
            // generate random passoword
            const randomPassword = Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(randomPassword, 10);

            // Generate random username using exist one for uniquense
            const randomUsername = name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-3);

            const newUser = new User({
                
                username: randomUsername,
                email,
                password: hashedPassword,
                photoURL:picture,
            });

            await newUser.save();

            const token = jwt.sign({ id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
            const {password, ...rest} = newUser._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        }

    }catch(error){
        next(error);
    }

}


