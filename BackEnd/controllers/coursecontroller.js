const { log } = require("console");
const { catchAsyncErrors } = require("../middlewares/catchAsyncError");
const courseModel = require("../Models/CourseModel")
const imagekit = require("../utils/imagekit").intiImagekit()
const path = require("path")

exports.coursepage = catchAsyncErrors(async (req, res, next) => {
    res.json({ message: "secure homepage " })
})

exports.addcourse = catchAsyncErrors(async(req, res, next)=>{
    const {coursename,description,author,category, price} = req.body

    const file = req.files.courseimage
    // console.log(file);

    const modifyFileName = `courseimage=${Date.now()}${path.extname(file.name)}`

    const {fileId , url} = await imagekit.upload({
        file : file.data,
        fileName : modifyFileName,
    })

    courseimage = {fileId, url}

    const newcourse = await new courseModel({
        coursename,
        description,
        author,
        category,
        price,
        courseimage
    })

    await newcourse.save()
    res.json(newcourse)
})

exports.allcourses = catchAsyncErrors(async(req, res, next)=>{
    const courses = await courseModel.find().exec()
    res.json(courses)
})

exports.coursedetails = catchAsyncErrors(async(req, res, next)=>{
    const course = await courseModel.findById(req.params.id).exec()
    res.json(course)

})


exports.addcourseimage = catchAsyncErrors(async(req, res, next)=>{
    const course = await courseModel.findById(req.params.id)
    const file = req.files.courseimage
    // console.log(file);

    const modifyFileName = `courseimage=${Date.now()}${path.extname(file.name)}`

    const {fileId , url} = await imagekit.upload({
        file : file.data,
        fileName : modifyFileName,
    })

    console.log(course);

    course.courseimage = {fileId, url}
    await course.save() 

    console.log(course);
    res.status(200).json({
        success:true,
        message:"course image uploded succefully"
    })
})