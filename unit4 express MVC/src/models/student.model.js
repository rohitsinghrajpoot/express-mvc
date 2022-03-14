const mongoose = require("mongoose")


const studentSchema = mongoose.Schema({
    rollId:{type:Number},
    currentBatch:{type:String},
 
 },
 {
     versionKey:false,
     timestamps:true
 }
 )
 
 const Student = mongoose.model("student",studentSchema)

 module.exports=Student