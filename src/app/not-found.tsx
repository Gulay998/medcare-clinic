"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function NotFound() {

  return (

    <main className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-blue-50
      px-5
    ">


      <motion.div
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        className="
          max-w-md
          rounded-3xl
          bg-white
          p-10
          text-center
          shadow-xl
        "
      >

        <h1 className="
          text-7xl
          font-bold
          text-blue-600
        ">
          404
        </h1>


        <h2 className="
          mt-5
          text-3xl
          font-bold
        ">
          Page Not Found
        </h2>


        <p className="
          mt-4
          text-gray-600
        ">
          Sorry, the page you are looking for does not exist.
        </p>


        <Link
          href="/"
          className="
            mt-8
            inline-block
            rounded-xl
            bg-blue-600
            px-8
            py-3
            text-white
            transition
            hover:bg-blue-700
          "
        >
          Back Home
        </Link>


      </motion.div>


    </main>

  );
}