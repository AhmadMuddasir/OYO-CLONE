import mongoose from "mongoose";

const URL = process.env.MONGO_URI;

const connectDB = async()=>{

     await mongoose.connect(URL,{
          useNewUrlParser:true,
          useUnifiedTopology:true
     });
     console.log("DB Connected...")

}

export default connectDB;

