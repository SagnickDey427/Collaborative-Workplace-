import express from "express" ;
import  {registerController, loginController, getMe}  from '../controllers/authControllers.js';
import protectRoute from "../middlewares/protectRoute.js";
const router = express.Router();

router.post('/register',registerController)

router.post('/login',loginController)

router.post('/logout',async (req,res)=>{
    res.send("This is log-out route.");
})

router.get('/me',protectRoute, getMe)

export default router;