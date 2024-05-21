const jwt = require("jsonwebtoken")
const ErrorHandler = require("../utils/ErrorHnadler")
const { catchAsyncErrors } = require("./catchAsyncError")


exports.isAuthenticated = catchAsyncErrors(async(req, res, next)=>{
    const {token} = req.cookies

    if(!token){
        return next(new ErrorHandler("Please Login to First"))
    }
    const {id} = jwt.verify(token, process.env.JWT_TOKEN)

    req.id = id

    res.json({id,token})
})