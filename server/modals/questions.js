import mongoose, { mongo } from "mongoose";

const questionSchema = mongoose.Schema({
    ques: {
        type:String,
        required:true,
   },
   option1:{
    type:String,
    required:true
   },
   option2:{
    type:String,
    required:true
   },   
   option3:{
    type:String,
    required:true
   },
   option4:{
    type:String,
    required:true
   },
   category:{
    type:String,
    required:true
   },
   correctAnswer:{
    type: String,
    required:true
   }
})

const Question = mongoose.model("question",questionSchema);
export {Question}