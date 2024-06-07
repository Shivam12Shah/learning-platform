import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/Axios";

const Updatecourse = () => {
  const { id } = useParams();

  const [alllecture, setalllectures] = useState([]);
  // console.log(id);

  const allLectures = async () => {
    try {
      const { data } = await axios.get(`/course/details/${id}`);
      // console.log(data.lectures);
      setalllectures(data.lectures);
      // console.log(alllecture);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    allLectures();
  }, []);
  return (
    <div className="w-full p-20 relative">
      <div className="showlectures-or-addlectures flex gap-3 items-center justify-between">
        <h1 className="bg-[#e4ddff] text-[#8B77E8] py-1 px-2 rounded-md">
          Lectures Added to Your Course
        </h1>
        <h1 className="bg-[#8B77E8] text-white px-2 py-1 rounded-md">
          Add new Lectrue
        </h1>
      </div>
      <div className="showlectrues-or-addlectrues py-5 flex gap-8">
        <div className="lectures w-1/2 flex flex-col gap-3">
          {alllecture &&
            alllecture.map((lecture, i) => (
              <div className="video w-full h-[80px] bg-zinc-50 shadow-md flex p-2 rounded-md gap-2">
                <div className="videoimg w-1/3 h-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9MzyvRDanq-vpQ0nqhpef49kRgbuNJKriQ&s"
                    alt=""
                  />
                </div>
                <div className="lecturedisc w-2/3 flex justify-between items-center">
                  <div className="info">
                    <h1 className="text-md ">lecture name</h1>
                  </div>
                  <div className="edit-deletbtn flex gap-3">
                    <i className="text-xl ri-edit-box-fill"></i>
                    <i className="text-xl ri-delete-bin-5-fill"></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="from-to-add-lectures w-1/2 bg-slate-500">
          <form className="flex flex-col" action="">
            <input type="text" placeholder="lecture No Or Title" />
            <input type="text" placeholder="Lecture description" />
            <input type="file" placeholder="Lecture Image" />
            <input type="file" placeholder="lecture video" />
            <button>Add Lectrue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updatecourse;
