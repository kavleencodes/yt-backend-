
import connectDb from "./db/index.js";
// require('dotenv').config() this disrupts the consistency of the code so we use the import statement 

import dotenv from "dotenv"//comfig also has to be done after this do the config thing 
dotenv.config({
    path:'./env'
})


connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server running at ${process.env.PORT} `)
    })
})
.catch((error)=>{
    console.log("mongo db connection falied!!!", err)
})//connection should have been made but take a look at dotenv





// import express from "express"
// const app=express()


// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error", error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is lostening`)
//         })
//     }catch(error){
//         console.error("error",error)
//         throw error
//     }
// })()