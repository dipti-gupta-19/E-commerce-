import UserModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}
// route user login
const loginUser = async(req,res) => {
    try{
        const {email,password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User does not exist"});
        }
        const isMatch = await bcrypt.compare(password,user.password);

        if(isMatch){
            const token = createToken(user._id);
            res.json({success:true,token});
        }else{
            res.json({success:false,message:"Invalid credentials"});
        }

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

// route user register
const registerUser = async(req,res) => {
    try{
        const {name,email,password} = req.body;
        //checking user already exists or not 
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.json({success:false,message:"User already exists"});
        }

        //validating email and password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid Email"});
        }
        if(password.length < 8){
            return res.json({success:false,message:"Password must be at least 8 characters long"});
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new UserModel({
            name,email,password:hashedPassword
        });

        const savedUser = await newUser.save();

        const token = createToken(savedUser._id);
        res.json({success:true,token});

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

//route admin login
const adminLogin = async(req,res) => {

}

export {loginUser, registerUser,adminLogin};