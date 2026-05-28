import User from '../models/UserSchema.js';
import bcrypt from "bcryptjs";
import validator from "validator";
import generateTokenAndSetCookie from '../Utils/genToken.js';



const  registerController = async (req,res)=>{
    try{
        //1. Get the user details
        const {username, email,password}= req.body;
        //2. Check if the user already exists
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).send({success:false,message:"User already exists, enter a unique email."});
        }

        //3. Check if it is the valid email or not using "Validator.js"
        const isValidEmail = validator.isEmail(email);
        if(!isValidEmail){
            return res.status(400).send({
                success:false,
                message:"Email is not valid, please give a valid email."
            })
        }

        //4. Check for password >8 length or not
        if(password.length < 8) {
            return res.status(400).send({
                success:false,
                message:"Password is too short, it must be atleast 8 characters long."
            })
        }
        //5. Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //6. Save the user in User collection
        const newUser = new User({
            username,
            email,
            password:hashedPassword
        });
        const savedUser = await newUser.save();

        res.status(201).send({
            success:true,
            message:"Registered successfully!",
            data:{
                username:savedUser.username,
                email:savedUser.email,
                profilePicUrl:savedUser.userProfileUrl
            }
        })



    } catch(err){
        res.status(500).send({
            success:false,
            message:`Error : ${err}`
        })
    }
}


const loginController = async (req,res)=>{
    try{
        const {username,email,password} = req.body;
        //Check if user exists 
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:"Invalid email or password."});
        }
        //Check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) { 
            return res.status(400).json({ success: false, message: "Invalid email or password." });
        }

        //Generate the token
        generateTokenAndSetCookie(user._id, res);
        return res.status(200).json({
            success: true,
            message: "Logged in successfully!",
            data: {
                _id: user._id,
                username: user.username,
                email: user.email,
                profilePicUrl: user.userProfileUrl
            }
        });
    } catch(err){
        console.error("Login Error: ", error);
        return res.status(500).json({
            success:false,
            message:`Server error : ${err}`
        })
    }
}

export  {registerController, loginController};