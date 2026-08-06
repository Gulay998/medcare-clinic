"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Register(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");


  const handleRegister = () => {

    if(password !== confirm){
      alert("Passwords do not match");
      return;
    }

    alert("Account created successfully");

  };


  return (

    <main className="min-h-screen bg-blue-50 flex items-center justify-center px-5">

      <motion.div
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl"
      >

        <h1 className="text-center text-4xl font-bold text-blue-600">
          Create Account
        </h1>


        <p className="mt-3 text-center text-gray-600">
          Join MedCare today
        </p>


        <div className="mt-8 space-y-5">


          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full rounded-xl border p-4"
          />


          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full rounded-xl border p-4"
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full rounded-xl border p-4"
          />


          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e)=>setConfirm(e.target.value)}
            className="w-full rounded-xl border p-4"
          />


          <button
            onClick={handleRegister}
            className="
              w-full
              rounded-xl
              bg-blue-600
              py-4
              font-bold
              text-white
              shadow-lg
              transition
              hover:scale-105
              hover:bg-blue-700
            "
          >
            Register
          </button>


        </div>


      </motion.div>

    </main>

  );
}