const mongoose = require("mongoose")

const evaluationSchema = mongoose.Schema({
    date_of_evaluation:{type:Number},
   
     userid:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"user",
         required:true
     },
  
  
      batchid:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"batch",
          required:true
      }
 }
 )
 
 const Evaluation = mongoose.model("evaluation",evaluationSchema)

 module.exports = Evaluation
 