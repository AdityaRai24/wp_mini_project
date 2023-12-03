import mongoose from "mongoose";


const ResultSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quizId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"quiz"
    },
    answers:[{
       type:Number,
       required:true
    }],
    score:{
        type:Number,
        required:true
    }
})

const Result = mongoose.model("result",ResultSchema)
export {Result};