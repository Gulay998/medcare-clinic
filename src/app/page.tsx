"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-blue-700">
                Advanced Medical Care
                <br />
                For Your Better Health
              </h1>

              <p className="mt-6 text-xl text-gray-600">
                Professional doctors. Modern technology. Personalized healthcare.
              </p >

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/appointment">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
                    Book Appointment
                  </button>
                </Link>

                <Link href="/doctors">
                  <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl">
                    Meet Doctors
                  </button>
                </Link>
              </div>
            </motion.div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">

  <div className="rounded-2xl bg-white p-5 text-center shadow">
    <h3 className="text-3xl font-bold text-blue-600">
      5000+
    </h3>
    <p className="text-gray-600">
      Patients
    </p>
  </div>


  <div className="rounded-2xl bg-white p-5 text-center shadow">
    <h3 className="text-3xl font-bold text-blue-600">
      50+
    </h3>
    <p className="text-gray-600">
      Doctors
    </p>
  </div>


  <div className="rounded-2xl bg-white p-5 text-center shadow">
    <h3 className="text-3xl font-bold text-blue-600">
      10+
    </h3>
    <p className="text-gray-600">
      Departments
    </p>
  </div>

</div>

            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
              alt="Doctor"
              className="
  w-full
  max-w-md
  rounded-3xl
  shadow-2xl
  transition
  duration-500
  hover:scale-105
"
            />

          </div>
        </section>

<section className="bg-white py-20">

  <div className="mx-auto max-w-6xl px-6">

    <h2 className="text-center text-4xl font-bold text-blue-700">
      Why Choose MedCare?
    </h2>

    <p className="mt-4 text-center text-gray-600">
      Providing high quality healthcare with experienced specialists.
    </p>

<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">

  <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
  className="rounded-3xl bg-blue-50 p-8 text-center shadow"
>
    <h3 className="text-2xl font-bold text-blue-700">
      ❤️ Quality Care
    </h3>

    <p className="mt-3 text-gray-600">
      High quality medical treatment with modern technology.
    </p>
  </motion.div>


  <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
  className="rounded-3xl bg-blue-50 p-8 text-center shadow"
>
    <h3 className="text-2xl font-bold text-blue-700">
      👨‍⚕️ Expert Doctors
    </h3>

    <p className="mt-3 text-gray-600">
      Experienced specialists ready to help you.
    </p>
  </motion.div>


  <div className="rounded-3xl bg-blue-50 p-8 text-center shadow">
    <h3 className="text-2xl font-bold text-blue-700">
      🕒 24/7 Service
    </h3>

    <p className="mt-3 text-gray-600">
      Medical support whenever you need it.
    </p>
  </div>

</div>

  </div>

</section>

      </main>
    </>
  );
}