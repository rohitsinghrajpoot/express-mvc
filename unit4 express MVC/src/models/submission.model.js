const mongoose = require("mongoose")


const submissionSchema = mongoose.Schema({
    marks:{type:Number},
   
    evaluationid:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"evaluation",
       required:true
    },
    studentid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required:true
    },
    
},
  
{
    versionKey:false,
    timestamps:true
}
)

const Submission = mongoose.model("submission",submissionSchema)

module.exports = Submission