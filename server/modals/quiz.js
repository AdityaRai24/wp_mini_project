import mongoose, { mongo } from "mongoose";

const quizSchema = mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   category:{
    type:String,
    required:true
   },
   questions:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:"question"
   }],
   answers:[{
      type:Number,
   }],
   score:{
    type: Number,
   }
})

const Quiz = mongoose.model("quiz",quizSchema);
export {Quiz}