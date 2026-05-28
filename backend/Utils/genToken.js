import jwt from'jsonwebtoken';

const generateTokenAndSetCookie = async (userId, res)=>{
    //Create jwt token with userId
    const token = jwt.sign({id:userId},process.env.JWT_SECRET,{
        expiresIn:"15d"
    });

    res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    httpOnly: true, // CRITICAL: Prevents JavaScript from reading the cookie (Stops XSS attacks)
    sameSite: "strict", // CRITICAL: Prevents CSRF (Cross-Site Request Forgery) attacks
    secure: process.env.NODE_ENV !== "development", // True in production (HTTPS only), False on localhost
  });

  return token;
}

export default generateTokenAndSetCookie;