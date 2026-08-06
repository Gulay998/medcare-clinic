"use client";

import { motion } from "framer-motion";


export default function Loading() {

  return (

    <main className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-blue-50
    ">

      <motion.div
        initial={{opacity:0, scale:0.8}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        className="text-center"
      >

        <div className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-4xl
          font-bold
          text-white
        ">
          +
        </div>


        <h1 className="
          mt-5
          text-4xl
          font-bold
          text-blue-600
        ">
          MedCare
        </h1>


        <p className="
          mt-3
          text-gray-600
        ">
          Loading healthcare experience...
        </p>


        <div className="
          mx-auto
          mt-6
          h-2
          w-48
          overflow-hidden
          rounded-full
          bg-blue-100
        ">

          <motion.div
            animate={{x:["-100%","100%"]}}
            transition={{
              repeat:Infinity,
              duration:1
            }}
            className="
              h-full
              w-1/2
              bg-blue-600
            "
          />

        </div>


      </motion.div>


    </main>

  );
}