import mongoose, { Mongoose } from "mongoose";

const DocumentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    collaborators:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
},{timestamps:true});

const Document = mongoose.model("Document",DocumentSchema);

export default Document;