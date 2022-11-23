import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="bg-sky-400 p-5 shadow-md">
        <div className="navbar-logo text-2xl">
          <h1 className="text-white flex text-center justify-start items-center">
            {" "}
            MED<span className="text-red-400">ICS</span>
          </h1>
        </div>
        <ul className="flex justify-end gap-20 mr-36 ">
          <li className="hover:bg-white px-3 py-2 rounded shadow-md ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-white px-3 py-2 rounded shadow-md ">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:bg-white px-3 py-2 rounded shadow-md ">
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </div>
      <div className=" flex justify-center items-center mt-20">
        <div className="">
          <img src="https://media.istockphoto.com/id/923956694/photo/ive-got-full-digital-records-of-all-my-patients.jpg?s=612x612&w=0&k=20&c=8rHtfvh59KxjpE-6dMsJA8efJnsnHDtRoJ_tWO19xSw="></img>
        </div>
        <div>
          <h1 className="text-7xl w-3/5 leading-tight">
            We are happy to have you here!!!
          </h1>
          <p className="w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus
            quam, rhoncus ut scelerisque eget, mattis at elit. Praesent non
            ipsum lacinia, lobortis est eget, cursus neque. 
            
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
