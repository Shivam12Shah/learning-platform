const express = require("express");
const router = express.Router();
const {
  homepage,
  usersignup,
  usersignin,
  usersignout,
  currentUser,
} = require("../controller/indexController");
const { isAuthenticated } = require("../middleware/auth");

router.get("/", isAuthenticated ,homepage);

router.post("/user", isAuthenticated ,currentUser);

router.post("/user/signup", usersignup);

router.post("/user/signin", usersignin);

router.get("/user/signout", isAuthenticated ,usersignout);

module.exports = router;
