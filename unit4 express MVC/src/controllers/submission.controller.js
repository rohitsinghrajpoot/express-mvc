const express = require("express")

const Submission = require("../models/submission.model")

const crudController = ("./crud.controllers")

const router = express.Router()

router.get("",async (req,res)=>{
    try{
       const submissions = await Submission.find().populate(
           {path:"evaluationid", }
        )
        .populate(
          {path:"studentid"}
        )
       .lean().exec()
       return res.status(200).send(submissions)
    }catch(err){
       return res.status(500).send({message:err.message})
    }
 })


router.post("", crudController.post(Submission))

//  app.post("",async (req,res)=>{
//      try{const submission = await Submission.create(req.body)
 
//      return res.status(201).send(submission)
//  }catch(err){
//      return res.status(500).send({message:err.message})
//  }
     
//  })

 module.exports = router;