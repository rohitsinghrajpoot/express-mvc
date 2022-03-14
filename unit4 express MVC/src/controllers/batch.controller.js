const express = require("express")

const Batch = require("../models/batch.model")
const crudController=require("./crud.controllers")
const  router= express.Router()

router.get("",async (req,res)=>{
    try{
       const batches = await Batch.find().lean().exec()
       return res.status(200).send(batches)
    }catch(err){
       return res.status(500).send({message:err.message})
    }
 })
 
 router.post("",crudController.post(Batch))
//  app.post("",async (req,res)=>{
//      try{const batch = await Batch.create(req.body)
 
//      return res.status(201).send(batch)
//  }catch(err){
//      return res.status(500).send({message:err.message})
//  }
     
//  })
 module.exports = router;