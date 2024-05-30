import React, { useContext, useEffect, useState } from "react";
import {  Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import Register from "../components/Register";
import { loginContext } from "../context/Logincontext";
import Addcourse from "../components/Addcourse";

const Router = () => {
  // const [auth, setauth] = useState(false);

  const {login} = useContext(loginContext)
// console.log(login);
  return (
    <Routes>
      <Route path="/"  element={login ? <Home /> : <Navigate to={`/login`} />} />
      <Route path="/login" element={login ? <Navigate to={`/`} />: <Login />} />
      <Route path="/register" element={login ? <Navigate to={`/`} />: <Register />} />
      <Route
        path="/about"
        element={login ? <About /> : <Navigate to={`/login`} />} 
      />
      <Route
        path="/courses"
        element={login ? <Courses /> : <Navigate to={`/login`} />}
      />
       <Route
        path="/addcourse"
        element={login ? <Addcourse /> : <Navigate to={`/login`} />}
      />
      <Route
        path="/contact"
        element={login ? <Contact /> : <Navigate to={`/login`} />}
      />
    </Routes>
  );
};

export default Router;
