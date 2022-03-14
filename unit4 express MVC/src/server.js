const app = require("./index")


const connect = require("./configs/db")

app.listen(4700,async (req,res)=>{
    try{
        await connect()
    }catch(err){
        console.log(err)
    }
    console.log("listening port 4500")
})

