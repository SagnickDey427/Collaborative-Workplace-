import express from "express" ;
import  {registerController, loginController}  from '../controllers/authControllers.js';
const router = express.Router();

router.post('/register',registerController)

router.post('/login',loginController)

router.post('/logout',async (req,res)=>{
    res.send("This is log-out route.");
})

router.get('/me',async (req,res)=>{
    res.send("This is verify user route");
})

export default router;