import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "../context/Logincontext";

const Navbar = () => {
  const {userloggedout} = useContext(loginContext)
  return (
    <div className="w-full h-[60px] shadow-md flex text-[#8B77E8] items-center justify-between px-20">
      <h1 className="mainlogoheading">Learnify</h1>
      <div className="navigationlinks flex gap-4">
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/courses`}>Courses</Link>
        <Link to={`/contact`}>Contact</Link>
      </div>
      <div className="signupbtn">
        <i onClick={userloggedout} className="ri-logout-box-r-line text-2xl"></i>
      </div>
    </div>
  );
};

export default Navbar;
