// middleware is generally jaate hue mil ke jana
// multer documentation reading in that options diskstorage and memorystorage 
// better option id diskstorage 

// here we just copies the whole from the documentation diskstorage 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
      // here file is with the multer itself 
      // this is used so that the file can be used   
      // file is not there there in res body json we use nulter so that we can get one more option to deal with file 
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

      cb(null, file.originalname)
      //file name should be unique but here we aretaking the original name only 
    }// file name unique file name 
  })
  
  export const upload = multer({ 
    storage: storage
 })