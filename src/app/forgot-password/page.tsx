"use client";

import { motion } from "framer-motion";

export default function ForgotPassword(){

  return (

    <main className="min-h-screen bg-blue-50 flex items-center justify-center px-5">

      <motion.div
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl"
      >

        <h1 className="text-center text-4xl font-bold text-blue-600">
          Forgot Password
        </h1>


        <p className="mt-4 text-center text-gray-600">
          Enter your email to reset your password
        </p>


        <input
          type="email"
          placeholder="Your Email"
          className="mt-8 w-full rounded-xl border p-4"
        />


        <button
          className="
          mt-5
          w-full
          rounded-xl
          bg-blue-600
          py-4
          text-white
          font-bold
          hover:bg-blue-700
          "
        >
          Send Reset Link
        </button>


      </motion.div>

    </main>

  );
}