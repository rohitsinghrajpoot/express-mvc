const mongoose = require("mongoose")


const batchSchema = mongoose.Schema({
    Batchname:{type:String},
 },
 {
     versionKey:false,
     timestamps:true
 }
 )
 
 const Batch = mongoose.model("batch",batchSchema)

 module.exports = Batch