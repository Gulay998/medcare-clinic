"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Mail, Lock } from "lucide-react";
import Link from "next/link";


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      email === "patient@clinic.com" &&
      password === "123456"
    ) {
      alert("Welcome Patient Dashboard");
    } 
    else if (
      email === "admin@clinic.com" &&
      password === "123456"
    ) {
      alert("Welcome Admin Dashboard");
    }
    else {
      alert("Invalid login");
    }
  };


  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center px-5">

      <motion.div
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl"
      >

        <h1 className="text-center text-4xl font-bold text-blue-600">
          MedCare Login
        </h1>


        <p className="mt-3 text-center text-gray-600">
          Access your account
        </p >


        <div className="mt-8 space-y-5">

         

  <Mail className="absolute left-4 top-4 text-blue-500" />

  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    className="w-full rounded-xl border p-4 pl-12"
  />

</div>


          <div className="relative">

  <Lock className="absolute left-4 top-4 text-blue-500" />

  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    className="w-full rounded-xl border p-4 pl-12"
  />

</div>


         <button
  onClick={handleLogin}
  className="
    w-full
    rounded-xl
    bg-blue-600
    py-4
    font-bold
    text-white
    shadow-lg
    transition
    duration-300
    hover:scale-105
    hover:bg-blue-700
  "
>
  Login
</button>

<div className="mt-5 flex justify-between text-sm">

  <Link
    href="/forgot-password"
    className="text-blue-600 hover:underline"
  >
    Forgot Password?
  </Link>


  <Link
    href="/register"
    className="text-blue-600 hover:underline"
  >
    Create Account
  </Link>

</div>

        <div className="mt-8 rounded-xl bg-blue-50 p-4 text-sm">

          <p className="font-bold">
            Demo Accounts:
          </p >

          <p>
            Patient:
            patient@clinic.com / 123456
          </p >

          <p>
            Admin:
            admin@clinic.com / 123456
          </p >

        </div>


      </motion.div>

    </main>
  );
}