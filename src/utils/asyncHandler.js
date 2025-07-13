const asyncHandler =(requesthandler)=>{
    // rather than fn,func -requesthandler is better
    (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).catch((err)=>next)//so that the next work can be done 
    }
}

export {asyncHandler}
// const asyncHandler =()=>{}
// const asyncHandler=(func)=()=>{} passing the function to another function
    // to make it async
    // ek function liya aur usko ek aur function mein pass kar diya higher order function
// const asyncHandler=(func)=async(req,res,next)=>{
//     try {
//         await func(req,res,next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }

// }
// this was the try catch 

