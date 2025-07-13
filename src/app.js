import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app= express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))//form data

//url data url encoder 
app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public"))// favicon and images 

app.use(cookieParser())//crud operations secure cookies on server of the userr







export {app}