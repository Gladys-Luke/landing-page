import React, { useState } from "react";
import mainLayout from "../layout/mainLayout";
import { Link } from "react-router-dom";

function SignUp() {
  const [userInput, setUser] = useState({})
  const [showUser, setShowUser] = useState(false)
  const handleChange = (e) =>{
const name = e.target.name;
const value = e.target.value;
setUser(values => ({...values, [name]: value}))
  }
  const handleSubmit = (e) =>{
    setShowUser(true)
      }
  return (
    <mainLayout>
      <div className=" w-full flex justify-center   text-center h-screen items-center">
      <div className=" flex flex-col  " >
        <div className=" p-16 shadow-xl rounded-lg">
        <div className="text-2xl">SignUp</div>
        <div className="flex flex-col">
          <div className="mt-8 flex flex-col items-center">
            <div className="flex flex-col items-start">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={userInput.username || ''}
                onChange={handleChange}
                className="mt-1.5 min-w-72 h-9 px-2.5 py-o text-base bg-slate-300 border-0 rounded mb-8 ease-in-out outline-none shadow-md"
              ></input>
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userInput.email || ''}
                onChange={handleChange}
                className="mt-1.5 min-w-72 h-9 px-2.5 py-o text-base bg-slate-300 border-0 rounded mb-8 ease-in-out outline-none shadow-md"
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                value={userInput.password || ''}
                onChange={handleChange}
                className="mt-1.5 min-w-72 h-9 px-2.5 py-o text-base bg-slate-300 border-0 rounded mb-8 ease-in-out outline-none shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <button type="button" onClick={handleSubmit} className="text-sm py-1.5 px-1.5 text-white border-0 rounded ease-in-out cursor-pointer outline-none bg-cyan-500">
            SignUp
          </button>
        </div>
        </div>
      </div>
      <div className="flex flex-col bg-sky-500 py-24 px-4 rounded drop-shadow-lg text-white">
      <Link to='/login'  className="hover:border-b-4 border-white ">Login</Link>
      <Link to='/home'  className="hover:border-b-4 border-white ">Home</Link>
      </div>
      </div>
      <ul className={showUser? "flex flex-col pl-10 text-3xl" : "hidden"}>
        <li>Username: {userInput.username}</li>
        <li>Email: {userInput.email}</li>
        <li>Password: {userInput.password}</li>
        <li></li>
      </ul>
    </mainLayout>
  );
}

export default SignUp;
