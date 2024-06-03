import React, { useContext, useEffect } from "react";
import Coursescard from "./Coursescard";
import { loginContext } from "../context/Logincontext";

const Courses = () => {
  const { allcourse, allcourses, admin } = useContext(loginContext);

  useEffect(() => {
    allcourses();
  }, []);

  return (
    <div className="w-full py-20 flex items-start justify-center gap-5 flex-wrap mx-auto px-20">
      {allcourse.map((course) => (
        <Coursescard course={course} key={course._id} admin={admin} id={course._id} />
      ))}
    </div>
  )
};

export default Courses;
