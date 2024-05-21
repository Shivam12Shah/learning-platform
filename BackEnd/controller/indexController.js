const { catchAsyncErrors } = require("../middleware/catchAsyncError");
const userModel = require("../models/userModel");
const ErrorHandler = require("../utils/ErrorHnadler");
const { sendToken } = require("../utils/sendToken");

exports.homepage = catchAsyncErrors(async (req, res, next) => {
  res.json({ message: "secure homepage" });
});

exports.currentUser = catchAsyncErrors(async( req, res, next)=>{
  const user = await userModel.findById(req.id).exec();
  res.status(200).json({ user });
})

exports.usersignup = catchAsyncErrors(async (req, res, next) => {
  const user = await new userModel(req.body).save();
  sendToken(user, 201, res)
});

exports.usersignin = catchAsyncErrors(async (req, res, next) => {
  const user = await userModel
    .findOne({ email: req.body.email })
    .select("+password")
    .exec();

  if (!user)
    return next(
      new ErrorHandler("User Not Found with this email address", 404)
    );

  const isMatch = user.comparePassword(req.body.password);

  if (!isMatch) return next(new ErrorHandler("Wrong credintials", 500));

  sendToken(user, 201, res)
});

exports.usersignout = catchAsyncErrors(async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ message: "User Logged Out" });
});
