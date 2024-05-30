import React, { useRef, useState } from "react";
import {useNavigate } from 'react-router-dom'

import axios from "../api/Axios"; // Assuming Axios is configured correctly

const Addcourse = () => {
  const navigate = useNavigate()
  const [coursename, setCoursename] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  console.log(image);
  const fileInputRef = useRef();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("courseimage", image);
    formData.append("coursename", coursename);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("author", author);
    try {
      await axios.post("/course/addcourse", formData)
      navigate("/courses")
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="w-full h-screen flex p-20 gap-5 ">
      <div className="courseform w-[60%]">
        <div className="heading text-2xl mb-5 font-semibold">
          Add Course Details{" "}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex gap-4 flex-col"
          enctype="multipart/form-data"
        >
          <input
            className="bg-slate-100 w-full p-2"
            type="text"
            placeholder="Course Name"
            value={coursename}
            onChange={(e) => setCoursename(e.target.value)}
          />
          <input
            className="bg-slate-100 w-full p-2"
            type="text"
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="bg-slate-100 w-full p-2"
            type="text"
            placeholder="Course author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            className="bg-slate-100 w-full p-2"
            type="text"
            placeholder="Course category "
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="bg-slate-100 w-full p-2"
            type="text"
            placeholder="Course Price "
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button>Submit</button>
        </form>
      </div>

      <div className="courseimige w-[40%] h-[50vh] px-20">
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Selected image"
            onClick={handleImageClick}
          />
        ) : (
          <div className="default-image" onClick={handleImageClick}>
            <img src="https://static.vecteezy.com/system/resources/previews/004/968/473/original/upload-or-add-a-picture-jpg-file-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg" alt="" />
            {/* <p>Click to upload image</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

//
export default Addcourse;
