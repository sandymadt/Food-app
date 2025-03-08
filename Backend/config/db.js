import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://dbuser:<dbuserpassword>@testpro.buspj.mongodb.net/?retryWrites=true&w=majority&appName=Testpro').then(()=>{
       console.log('DB connected') ;
    })
}