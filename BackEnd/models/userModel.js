const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userschema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

userschema.pre("save", function () {
  if (!this.isModified("password")) {
    return;
  }

  let salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
});

userschema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userschema.methods.genrateJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_TOKEN, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("user", userschema);
