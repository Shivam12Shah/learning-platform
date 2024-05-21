require("dotenv").config({path:"./.env"})
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

require("./models/database").connectDatabase()


//logger 
const logger = require("morgan")
app.use(logger("tiny"))


//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// /session and cookesis


const session = require("express-session")
const cookieparser = require("cookie-parser")

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:process.env.SESSION_SECRET,
}))

app.use(cookieparser())

// routes
app.use("/", require("./routes/indexRoute"))

//eroor handler

const ErrorHandler = require("./utils/ErrorHnadler")
app.all("*", (req, res,next)=>{
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404))
})
const { genratedErros } = require("./middleware/error")

app.use(genratedErros)

app.listen( process.env.PORT, console.log(`Server is Running PORT ${process.env.PORT}`))