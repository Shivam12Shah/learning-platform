const express = require("express")
const cors = require("cors")
const app = express()

// //dotnev
require("dotenv").config()

app.use(cors({
    origin: true,
    credentials: true
}));

//logger
const logger = require("morgan")
app.use(logger('tiny'))

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//session cookies
const session = require("express-session")
const cookiesParser = require("cookie-parser")
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}))
app.use(cookiesParser())

// dbb connected 
require("./dbconnection/connectDb").dbConnectio()

const ErorrHander = require("./utils/errorhandels")
const fileUpload = require("express-fileupload")
app.use(fileUpload())


const { genratedErrors } = require("./middlewares/error")


app.use("/", require("./routes/indexroute"))
app.use("/", require("./routes/courseroute"))




app.all("*", (req, res, next) => {
    next(new ErorrHander(`requested url not found ${req.url}`, 404))
})
app.use(genratedErrors)

app.listen(process.env.PORT, () => {
    console.log("server is running port ", process.env.PORT);
})