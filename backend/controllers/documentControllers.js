import Document from "../models/DocumentSchema.js"


const createDocumentController = async (req,res)=>{
    try{
        const authorID = req.user._id;
        const newDoc = new Document({
            title:"Untitled Document",
            owner:authorID,
            content:""
        });
        await newDoc.save();
        return res.status(201).json({
            success:true,
            data:newDoc
        });
    } catch(err){
        console.log(`Error in creating document: ${err}`);
        return res.status(500).json({
            success:false,
            message:`Server Error: ${err}`
        })
    }
}


const getDocumentController = async (req,res)=>{
    try{
        const userID = req.user._id;
        const allDocs = await Document.find({owner:userID}).sort({updatedAt : -1});

        return res.status(200).json({
            success:true,
            data:allDocs
        });
    } catch(err){
        console.log(`Error in fetching all documents : ${err}`);
        return res.status(500).json({
            success:false,
            message:`Server Error : ${err}`
        });
    }
}


const updateDocumentController = async (req,res)=>{
    try{
        const documentID = req.params.id;
        const {title,content} = req.body;
        const updatedDoc = await Document.findOneAndUpdate(
            {_id:documentID,owner:req.user._id},
            {$set:{title,content}},
            {returnDocument:"after"}
        );
        if(!updatedDoc){
            return res.status(404).json({
                success:false,
                message:"Document not found or you do not have the permission to edit it."
            });
        }
        return res.status(200).json({
            success:true,
            data:updatedDoc
        });
    } catch(err){
        console.log(`Error in updating document : ${err}`);
        return res.status(500).json({
            success:false,
            message:`Server Error : ${err}`
        });
    }
}

export {createDocumentController, getDocumentController, updateDocumentController};