import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Course from "../components/Course";
import UploadCourse from "../components/UploadCourse";
import About from "../components/About";
import Contact from "../components/Contact";
import Coursedetails from "../components/Coursedetails";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Course />}/>
      <Route path="/courses/newcourse" element={<Coursedetails />}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/uploadcourse" element={<UploadCourse />} />
    </Routes>
  );
};

export default Routers;
