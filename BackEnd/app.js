require("dotenv").config({path:"./.env"})
const express = require("express")
const app = express()

//logger 
const logger = require("morgan")
const ErrorHandler = require("./utils/ErrorHnadler")
const { genratedErros } = require("./middleware/error")
app.use(logger("tiny"))

// routes
app.get("/", require("./routes/indexRoute"))

//eroor handler

app.all("*", (req, res,next)=>{
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404))
})

app.use(genratedErros)

app.listen( process.env.PORT, console.log(`Server is Running PORT ${process.env.PORT}`))