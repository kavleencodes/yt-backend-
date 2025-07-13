import mongoose from "mongoose";
import bcrpyt from "bcrpyt"
import jwt from "jsonwebtoken"


const userschema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true// to make the search optimised make index true whnever searching is to be done 
    }, 
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        unique:true,
        
        trim:true,
        index:true

    }, 
    avatar:{
        type:String, // cloudinary url is to be used here 
        required:true
    },
    coverimage:{
        type:String
    },
    watchhistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,// password shoul be encrypted so as in case of db
        required:[true,'password is req!!']
    },
    refreshtoken:{
        type:String
    }

},{timestamps:true})

// password and token is left
userschema.pre(" save", async function (next){
    if(!this.isModified("password")) return next();

    this.password=bcrypt.hash(this.password,10)
    next()
})

// now some methods have to be written so that we can ask the user if the user is correct or not

userschema.methods.isPasswordCorrect=async function(password){
   return await  bcrpyt.compare(password,this.password)// result 
}

// for tokens
// access token  
userschema.methods.generateAccesstoken=function(){
    // sign method is used to generate the token

    return jwt.sign(
        {
            //payload
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        // now we need access token
        process.env.ACCESS_TOKEN_SECRET,
        //expiresin we need
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// refresh token, has less info 
userschema.methods.generateRefreshtoken=function(){
    // sign method is used to generate the token

    return jwt.sign(
        {
            //payload
            _id:this._id,
            // email:this.email,
            // username:this.username,
            // fullname:this.fullname
        },
        // now we need access token
        process.env.REFRESH_TOKEN_SECRET,
        //expiresin we need
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User=mongoose.model("User",userschema)
