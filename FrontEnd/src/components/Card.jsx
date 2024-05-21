import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to='/courses/newcourse'>
    <div className="card w-[300px] h-[220px]  shadow-sm rounded-sm overflow-hidden p-1 hover:shadow-lg transition">
      <div className="coverimg w-full h-[85%]">
        <img
          className="w-[100%] h-[100%]"
          src="https://i.ytimg.com/vi/cw6p3BL05Ng/maxresdefault.jpg"
          alt=""
        />
      </div>
      <div className="coursedets h-[15%] flex items-center justify-between px-2">
        <h1 className="text-[#8B77E8] font-medium">React Course</h1>
        <p className="bg-[#8B77E8] text-white px-2 text-sm rounded">$6969</p>
      </div>
    </div>
    </Link>
  );
};

export default Card;
