const express = require("express");
const router = express.Router();

const { coursepage, addcourse,coursedetails,allcourses , addcourseimage  } = require("../controllers/coursecontroller");

const { isAuthenticated, iaAdmin } = require("../middlewares/auth");

router.get("/course", isAuthenticated, coursepage);


router.get("/course/allcourses", isAuthenticated, allcourses);

router.get("/course/addcourse/:id", isAuthenticated, coursedetails);

// only admin can add course
router.post("/course/addcourse", isAuthenticated, iaAdmin ,addcourse);

router.post("/course/addcourse/:id", isAuthenticated, iaAdmin ,addcourseimage);


module.exports = router;
