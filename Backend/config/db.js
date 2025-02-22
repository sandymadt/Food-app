import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://dhanu_077:Dhanu@9916@cluster0.vj14o.mongodb.net').then(()=>{
       console.log('DB connected') ;
    })
}