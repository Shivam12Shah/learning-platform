import React from "react";
import Card from "./Card";

const Course = () => {
  return (
    <div className="courses-dets my-5 px-32 ">
      <h1 className="text-2xl font-semibold text-[#8B77E8] my-5 text-center">
        All Courses Details{" "}
      </h1>
      <div className="cards flex gap-8 flex-wrap justify-center ">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    
      </div>
    </div>
  );
};

export default Course;
