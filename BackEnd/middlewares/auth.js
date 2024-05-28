const jwt = require("jsonwebtoken")
const ErorrHander = require("../utils/errorhandels")
const { catchAsyncErrors } = require("./catchAsyncError")


exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErorrHander("Please login in to access the resource", 401))
    }

    const { id } = jwt.verify(token, process.env.JWT_SECRECT);
    // console.log(id);
    req.id = id

    next()
})


