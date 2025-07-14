// very reuseable code 
// file on server now , we have to take the path of the server and upload the file on the cloudinary and file is to be removed from the server 

import {v2} from "cloudinary"
import fs from "fs" // node js file system already given with npm helps in mamnaging the whole file system 
// most important is unlink delete is kinda unlinked 
import { v2 as cloudinary } from 'cloudinary';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // this is changed and written in the .env file 
    });
})  

const uploadoncloud=async(localfilepath)=>{
    try{
        if(!localfilepath) return null

        const response=await cloudinary.uploader.upload(localfilepath,{
            resource_type:"auto"// detect yourself what file is uploaded
        })
        // file uploaded success
        console.log("file is uploaded successfully",response.url)// after upload what is the public url 
        return response
    }catch(error){
        // for save cleaning purpose if the file is not uploaded clean the file from the server at least so that there is not malacious file
        // unlike and unlinkSync 
        fs.unlinkSync(localfilepath)// remove the locally saves temp file as upload got falied 
        return null// return is to be done also
    }
    
    
}

export {cloudinary}
