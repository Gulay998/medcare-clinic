"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-blue-700 text-white mt-20"
>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">

        <div>
          <h2 className="text-2xl font-bold">
            + MedCare
          </h2>

          <p className="mt-4 text-blue-100">
            Advanced medical care with professional doctors
            and modern healthcare technology.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-2 text-blue-100">

  <li>
    <Link href="/" className="hover:text-white">
      Home
    </Link>
  </li>

  <li>
    <Link href="/doctors" className="hover:text-white">
      Doctors
    </Link>
  </li>

  <li>
    <Link href="/services" className="hover:text-white">
      Services
    </Link>
  </li>

  <li>
    <Link href="/appointment" className="hover:text-white">
      Appointment
    </Link>
  </li>

</ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold">
            Contact
          </h3>

          <p className="mt-4 text-blue-100">
            📍 Hangzhou, China
          </p>

          <p className="text-blue-100">
            📞 +86 123 456 789
          </p>
<p className="text-blue-100">
  ✉️ info@medcare.com
</p>
          <h3 className="mt-6 text-xl font-semibold">
  Follow Us
</h3>

<div className="mt-4 flex gap-4 text-2xl">

  <span className="cursor-pointer hover:text-blue-200">
    🔵
  </span>

  <span className="cursor-pointer hover:text-blue-200">
    📷
  </span>

  <span className="cursor-pointer hover:text-blue-200">
    💼
  </span>

</div>
        </div>

      </div>


      <div className="border-t border-blue-400 py-5 text-center text-blue-100">
        © 2026 MedCare Clinic. All rights reserved.
      </div>

    </motion.footer>
  );
}