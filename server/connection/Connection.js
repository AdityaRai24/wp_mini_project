import mongoose from "mongoose";

const Connection = async(username,password)=>{
    try {
        await mongoose.connect("mongodb+srv://aditya:aditya@quiz.vrbhfg6.mongodb.net/?retryWrites=true&w=majority" )
        console.log("Connected to mongodb successfully")
    } catch (error) {
        console.log("Failed to connect to database");
        
    }
}

export default Connection;