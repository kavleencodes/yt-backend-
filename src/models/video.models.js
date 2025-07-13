import mongoose ,{Schema} from mongoose
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoschema=new Schema({
    videofile:{
        type:String, // cloudinary url
        required:true,

    }, thumbnail:{
        type:String, // cloudinary url
        required:true,
    },
    title:{
        type:String, 
        required:true

    },
    description:{
        type:String, 
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.types.ObjectId,
        ref:"User"
    }
},{timestamps: true})


videoschema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video", videoschema)