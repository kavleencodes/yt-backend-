import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";
 const connectDb=async()=>{
    try{
        const connectioninst=await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`mongo db connected ${connectioninst.connection.host}`)

    }catch(error){
        console.log("error",error);
        process.exit(1)


    }
 }

 export default connectDb