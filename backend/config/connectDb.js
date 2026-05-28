import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongo_uri = process.env.MONGO_URL

const connectDb = async ()=>{
    try{
        if(mongoose.connection.readyState>=1){
            console.log("Db is already connected. Avoiding creating another new parallel connection,");
            return;
        }

        await mongoose.connect(mongo_uri);
        console.log("Db connected successfully.");
    } catch(err){
        console.log(`Some error occured : ${err}`);
        process.exit(1);
    }
}

export default connectDb;