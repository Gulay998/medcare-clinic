"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import {
  Stethoscope,
  Award
} from "lucide-react";

const doctors = [

  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "10 years experience",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    id: "michael-lee",
    name: "Dr. Michael Lee",
    specialty: "Neurologist",
    experience: "8 years experience",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
  {
    id: "emily-brown",
    name: "Dr. Emily Brown",
    specialty: "General Doctor",
    experience: "12 years experience",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
  },
];

export default function Doctors() {
  return (
    <main className="min-h-screen bg-blue-50 py-20">
      <div className="text-center">

  <h1 className="text-5xl font-bold text-blue-600">
    Our Expert Doctors
  </h1>

  <p className="mt-4 text-lg text-gray-600">
    Meet our experienced medical specialists providing high-quality healthcare.
  </p>

</div>

      <div className="mt-12 grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-3">
        {doctors.map((doctor) => (
          <motion.div
  key={doctor.name}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  whileHover={{ y: -10 }}
  className="rounded-3xl bg-white p-6 text-center shadow-xl transition"
>
            <img
  src={doctor.image}
  alt={doctor.name}
  className="
    mx-auto
    h-44
    w-44
    rounded-full
    object-cover
    ring-4
    ring-blue-100
    transition
    duration-300
    hover:scale-105
  "
/>

            <h2 className="mt-5 text-2xl font-bold">
              {doctor.name}
            </h2>

            <p className="mt-2 flex items-center justify-center gap-2 text-blue-600">
  <Stethoscope className="h-5 w-5" />
  {doctor.specialty}
</p>

            <p className="mt-2 flex items-center justify-center gap-2 text-gray-600">
  <Award className="h-5 w-5" />
  {doctor.experience}
</p>

           <div className="mt-5 flex justify-center gap-3">

  <Link
    href={`/doctors/${doctor.id}`}
    className="rounded-xl border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50"
  >
    View Profile
  </Link>


  <Link
    href={`/appointment?doctor=${doctor.id}`}
    className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
  >
    Book Appointment
  </Link>

</div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}