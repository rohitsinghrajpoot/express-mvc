const express = require("express")

const Evaluation =require("../models/evaluation.model")
const crudController= require("./crud.controllers")
const router = express.Router()

router.get("",async (req,res)=>{
    try{
       const evaluations = await Evaluation.find().populate("userid").populate("batchid").lean().exec()
       return res.status(200).send(evaluations)
    }catch(err){
       return res.status(500).send({message:err.message})
    }
 })
 router.post("",crudController.post(Evaluation))
//  app.post("",async (req,res)=>{
//      try{const evaluation = await Evaluation.create(req.body)
 
//      return res.status(201).send(evaluation)
//  }catch(err){
//      return res.status(500).send({message:err.message})
//  }
     
//  })

 module.exports = router