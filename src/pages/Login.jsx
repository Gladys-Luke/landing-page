import React, { useEffect, useState } from "react";
import mainLayout from "../layout/mainLayout";
import { Link } from "react-router-dom";



function Login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [randomQuote, setRandomQuote] = useState({})
  const [Quotes, setQuote] = useState([
    {
      id: 1,
      quote: "Thank God is Friday"
    },
    {
      id: 2,
      quote: "Aspire to Perspire"
    },
    {
      id: 3,
      quote: "Tomorrow is too late"
    },
    {
      id: 4,
      quote: "e don do like that"
    },
  ])


  useEffect(() => {
   setInterval(() => {
      const randomIndex = Math.floor(Math.random() * Quotes.length)
      const item = Quotes[randomIndex]
      setRandomQuote(item)
      console.log(item)
      console.log(Quotes.length)
    }, 2000);
  }, [Quotes]);
  
      return (
    <mainLayout>
     <div className=" w-full flex justify-center   text-center h-screen items-center">
     <div className=" flex flex-col  " >
        <div className=" p-16 shadow-xl rounded-lg">
        <p>{randomQuote.quote}</p>
        <div className="text-2xl">Login</div>
        <div className="flex flex-col">
          <div className="mt-8 flex flex-col items-center">
            <div className="flex flex-col items-start">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="mt-1.5 min-w-72 h-9 px-2.5 py-o text-base bg-slate-300 border-0 rounded mb-8 ease-in-out outline-none shadow-md"
              ></input>
            </div>
          
            <div className="flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="mt-1.5 min-w-72 h-9 px-2.5 py-o text-base bg-slate-300 border-0 rounded mb-8 ease-in-out outline-none shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <button type="button" className="text-sm py-1.5 px-1.5 text-white border-0 rounded ease-in-out cursor-pointer outline-none bg-cyan-500">
            Login
          </button>
        </div>
        </div>
      </div>

      <div className="flex flex-col bg-sky-500 py-24 px-4 rounded shadow-md text-white">
      <Link to='/signup' className="hover:border-b-4 border-white ">SignUp</Link>
      <Link to='/home' className="hover:border-b-4 border-white ">Home</Link>
      </div>
      </div>
     
    </mainLayout>
  );
   
}

export default Login;
