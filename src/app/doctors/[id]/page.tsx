"use client";

import {
  GraduationCap,
  Languages,
  CalendarDays
} from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

const doctors = [
  {
 id: "sarah-johnson",
 name: "Dr. Sarah Johnson",
 specialty: "Cardiologist",
 experience: "10 years experience",
 image:
   "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",

 description:
   "Dr. Sarah Johnson specializes in heart diseases and modern cardiovascular treatments.",

 education:
   "Harvard Medical School",

 languages:
   "English, Chinese",

 availability:
   "Monday - Friday"
},
  {
    id: "michael-lee",
    name: "Dr. Michael Lee",
    specialty: "Neurologist",
    experience: "8 years experience",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    description:
      "Dr. Michael Lee focuses on neurological disorders and patient care.",
  },
  {
    id: "emily-brown",
    name: "Dr. Emily Brown",
    specialty: "General Doctor",
    experience: "12 years experience",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    description:
      "Dr. Emily Brown provides general medical consultation and healthcare.",
  },
];



export default function DoctorProfile() {

  const params = useParams();

  const doctor = doctors.find(
    (item) => item.id === params.id
  );


  if (!doctor) {
    return (
      <div className="p-20 text-center text-3xl">
        Doctor not found
      </div>
    );
  }


  return (
    <main className="min-h-screen bg-blue-50 py-20">

      <motion.div
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}
        className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl"
      >

        <img
          src={doctor.image}
          alt={doctor.name}
          className="mx-auto h-72 w-72 rounded-full object-cover"
        />


        <h1 className="mt-8 text-center text-5xl font-bold text-blue-600">
          {doctor.name}
        </h1>


        <p className="mt-4 text-center text-2xl text-blue-500">
          {doctor.specialty}
        </p>


        <p className="mt-3 text-center text-gray-600">
          {doctor.experience}
        </p>

<p className="mt-8 text-center text-lg text-gray-700">
  {doctor.description}
</p>


<div className="mt-8 rounded-3xl bg-blue-50 p-8">

  <h2 className="text-2xl font-bold text-blue-600">
    About Doctor
  </h2>

  <p className="mt-4 text-gray-700">
    {doctor.description}
  </p>

</div>

       <div className="mt-10 grid gap-6 md:grid-cols-3">

  <div className="rounded-2xl bg-blue-50 p-5 text-center">

    <div className="flex items-center justify-center gap-2 text-blue-600">

      <GraduationCap className="h-6 w-6" />

      <h3 className="font-bold">
        Education
      </h3>

    </div>

    <p className="mt-2 text-gray-600">
      {doctor.education}
    </p>

  </div>


  <div className="rounded-2xl bg-blue-50 p-5 text-center">

    <div className="flex items-center justify-center gap-2 text-blue-600">

      <Languages className="h-6 w-6" />

      <h3 className="font-bold">
        Languages
      </h3>

    </div>

    <p className="mt-2 text-gray-600">
      {doctor.languages}
    </p>

 </div>

  <div className="rounded-2xl bg-blue-50 p-5 text-center">

    <div className="flex items-center justify-center gap-2 text-blue-600">

      <CalendarDays className="h-6 w-6" />

      <h3 className="font-bold">
        Availability
      </h3>

    </div>

    <p className="mt-2 text-gray-600">
      {doctor.availability}
    </p>

  </div>

</div>





 <div className="mt-10 flex justify-center">

  <Link
    href={`/appointment?doctor=${doctor.id}`}
    className="
      rounded-xl
      bg-blue-600
      px-8
      py-3
      text-white
      shadow
      transition
      hover:bg-blue-700
    "
  >
    Book Appointment
  </Link>

</div>


       


      </motion.div>

    </main>
  );
}