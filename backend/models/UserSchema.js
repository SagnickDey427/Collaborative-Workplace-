import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userProfileUrl:{
        type:String,
        default:"https://api.dicebear.com/7.x/avataaars/svg?seed=fallback"
    }
},{timestamps:true});

const User = mongoose.model("User",userSchema,);

export default User;
