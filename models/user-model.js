import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
     name:{
          type:String,
          require:true,
          trim:true,
     },
     email:{
          type:String,
          require:true,
          trim:true,
          unique:true,
     },
     password:{
          type:String,
          require:true,
          trim:true,
     },
},{timestamps:true})

export default  mongoose.models?.User || mongoose.model("User",UserSchema);