import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { loginContext } from "../context/Logincontext";

const Navbar = () => {
  const {userloggedout, admin} = useContext(loginContext)
  console.log(admin)
  
  return (
    <div className="w-full h-[60px] shadow-md flex text-[#8B77E8] items-center justify-between px-20">
      <h1 className="mainlogoheading">Learnify</h1>
      <div className="navigationlinks flex gap-4">
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/courses`}>Courses</Link>
        <Link to={`/contact`}>Contact</Link>
      </div>
      <div className="signupbtn flex items-center justify-center gap-5">
      {admin ? <Link to={`/addcourse`} ><span>add Course</span></Link>: <span></span>}
        <i onClick={userloggedout} className="ri-logout-box-r-line text-2xl"></i>
      </div>
    </div>
  );
};

export default Navbar;
