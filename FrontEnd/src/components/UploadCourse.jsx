import React from "react";

const UploadCourse = () => {
  return (
    <div className="px-32 py-10">
      <h1 className="text-[#8B77E8] text-2xl font-semibold text-center">UploadCourse</h1>
      <div className="uploadcourse flex gap-4 items-center">
        <form className="py-3 flex flex-col gap-2 w-[50%]">
          <input
            className="border rounded px-2 py-1 w-[100%]"
            type="text"
            placeholder="Course Name"
          />
          <input
            className="border rounded px-2 py-1 w-[100%]"
            type="url"
            placeholder="Course Cover image URL"
          />
          <input
            className="border rounded px-2 py-1 w-[100%]"
            type="number"
            placeholder="Course Prize in Rupees"
          />
          <input
            className="border rounded px-2 py-1 w-[100%]"
            type="url"
            placeholder="Course Demo Videos URL with comma ( , )"
          />
          <input
            className="border rounded px-2 py-1 w-[100%]"
            type="url"
            placeholder="Course Videos URL with comma ( , )"
          />
          <button className="w-max px-2 py-1 bg-[#8B77E8] text-white rounded">
            Add Playlist
          </button>
        </form>
        <div className="coursediv w-[50%]  bg-red-400">
            <img src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?w=740&t=st=1716152358~exp=1716152958~hmac=5e835ce61c11418b50462dcc526867dfac302339055433eb3a8ec90776d3f84a" alt="" />
        </div>
      </div>
    </div>
  );
};

export default UploadCourse;
