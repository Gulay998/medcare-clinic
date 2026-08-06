"use client";

import { motion } from "framer-motion";

export default function Dashboard() {

  return (

    <main className="min-h-screen bg-blue-50 p-8">

      <motion.div
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        className="mx-auto max-w-6xl"
      >

        <h1 className="text-4xl font-bold text-blue-600">
          Patient Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome back, John Smith
        </p >


        <div className="mt-10 grid gap-6 md:grid-cols-3">


          <div className="rounded-2xl bg-white p-6 shadow-lg">

            <h2 className="text-xl font-bold text-blue-600">
              Upcoming Appointment
            </h2>

            <p className="mt-4">
              Dr. Sarah Johnson
            </p >

            <p className="text-gray-600">
              Cardiology
            </p >

            <p className="mt-2">
              📅 15 August 2026
            </p >

            <p>
              ⏰ 10:00 AM
            </p >

          </div>



          <div className="rounded-2xl bg-white p-6 shadow-lg">

            <h2 className="text-xl font-bold text-blue-600">
              Medical History
            </h2>

            <ul className="mt-4 space-y-2 text-gray-600">

              <li>
                ✅ General Checkup - 2025
              </li>

              <li>
                ✅ Blood Test - 2026
              </li>

              <li>
                ✅ Heart Examination - 2026
              </li>

            </ul>

          </div>



          <div className="rounded-2xl bg-white p-6 shadow-lg">

            <h2 className="text-xl font-bold text-blue-600">
              Profile Settings
            </h2>

            <p className="mt-4">
              Name: John Smith
            </p >

            <p>
              Email: patient@clinic.com
            </p >

            <button className="mt-5 rounded-xl bg-blue-600 px-5 py-2 text-white">
              Edit Profile
            </button>

          </div>


        </div>


        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">

          <h2 className="text-2xl font-bold text-blue-600">
            Doctor Messages
          </h2>

          <p className="mt-4 text-gray-600">
            Dr. Sarah Johnson: 
            Please remember your appointment on 15 August.
          </p >

        </div>


      </motion.div>


    </main>

  );
}