"use client";

import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    title: "Cardiology",
    description:
      "Advanced heart care, diagnosis and treatment by experienced cardiologists.",
    icon: "❤️",
  },
  {
    title: "Neurology",
    description:
      "Professional neurological examination and modern treatment methods.",
    icon: "🧠",
  },
  {
    title: "General Medicine",
    description:
      "Complete healthcare services for everyday medical needs.",
    icon: "🩺",
  },
  {
    title: "Laboratory",
    description:
      "Accurate medical tests with modern laboratory equipment.",
    icon: "🔬",
  },
  {
    title: "Emergency Care",
    description:
      "Fast and reliable emergency medical support.",
    icon: "🚑",
  },
  {
    title: "Health Checkup",
    description:
      "Full body health examination and prevention programs.",
    icon: "🏥",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-blue-50 py-20">

      <h1 className="text-center text-5xl font-bold text-blue-600">
        Our Services
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
        Professional medical services with modern technology and experienced doctors.
      </p >

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-3">

        {services.map((service) => (
          <motion.div
  key={service.title}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-white p-8 text-center shadow-lg"
          >

            <div className="text-5xl">
              {service.icon}
            </div>

            <h2 className="mt-5 text-2xl font-bold text-blue-600">
              {service.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {service.description}
            </p >
<Link
  href="/appointment"
  className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
>
  Book Appointment
</Link>
            <button className="mt-6 rounded-xl bg-blue-600 px-6 py-2 text-white">
              Learn More
            </button>

          </motion.div>
        ))}

      </div>

<section className="mt-20 bg-blue-600 py-12 text-center text-white">

  <h2 className="text-4xl font-bold">
    Need Medical Help?
  </h2>

  <p className="mt-4">
    Schedule an appointment with our professional doctors.
  </p>

  <Link
    href="/appointment"
    className="mt-6 inline-block rounded-xl bg-white px-8 py-3 text-blue-600"
  >
    Book Appointment
  </Link>

</section>

    </main>
  );
}