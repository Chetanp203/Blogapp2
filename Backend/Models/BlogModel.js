import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    likes:{
        type:Number,
        default:0
    },
    comments:[{
        text:String,
        user:String
    }]
})

export default mongoose.model("Blog",blogSchema)