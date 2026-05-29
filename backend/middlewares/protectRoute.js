import User from "../models/UserSchema.js";
import jwt from 'jsonwebtoken';

const protectRoute = async (req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token){
            console.log('Token not found!');
            return res.status(401).json({
                success:false,
                message:"Unauthorised access -- token not found!"
            });
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");
        if(!user){
            console.log('User not found !');
            return res.status(404).json({
                success:false,
                message:"User not found!"
            });
        }

        req.user = user;
        next();

    } catch(err){
        console.log(`Error in middleware protectRoute : ${err}`);
        return res.status(500).json({
            success:false,
            message:`Server Error : ${err}`
        });
    }
}

export default protectRoute;