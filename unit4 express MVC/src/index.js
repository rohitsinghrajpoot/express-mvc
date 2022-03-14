const express = require("express")

const app = express()

app.use(express.json())

const userController = require("./controllers/user.controller")

const studentController = require("./controllers/student.controller")

const batchController = require("./controllers/batch.controller")

const evaluationController = require("./controllers/evaluation.controller")

const submissionController = require("./controllers/submission.controller")



app.use("/users",userController)
app.use("/students",studentController)
app.use("/batches",batchController)
app.use("/evaluations",evaluationController)
app.use("/submissions",submissionController)

module.exports = app;