"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <nav className="bg-white px-6 py-5 shadow">

      <div className="flex items-center justify-between">


        {/* Logo */}

        <div className="flex items-center gap-2">

          <div className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-xl
            font-bold
            text-white
          ">
            +
          </div>


          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            MedCare
          </Link>

        </div>



        {/* Desktop Menu */}

        <div className="hidden items-center gap-6 md:flex">

          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/doctors" className="hover:text-blue-600">
            Doctors
          </Link>

          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>

          <Link href="/appointment" className="hover:text-blue-600">
            Appointment
          </Link>

          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>


          <Link
            href="/appointment"
            className="
            rounded-xl
            border
            border-blue-600
            px-5
            py-2
            text-blue-600
            "
          >
            Book Appointment
          </Link>


          <Link
            href="/login"
            className="
            rounded-xl
            bg-blue-600
            px-5
            py-2
            text-white
            "
          >
            Login
          </Link>

        </div>



        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >

          {open ? (
            <X className="h-7 w-7 text-blue-600" />
          ) : (
            <Menu className="h-7 w-7 text-blue-600" />
          )}

        </button>


      </div>



      {/* Mobile Menu */}

      {open && (

        <div className="mt-6 flex flex-col gap-4 md:hidden">


          <Link href="/">
            Home
          </Link>


          <Link href="/doctors">
            Doctors
          </Link>


          <Link href="/services">
            Services
          </Link>


          <Link href="/appointment">
            Appointment
          </Link>


          <Link href="/contact">
            Contact
          </Link>


          <Link
            href="/login"
            className="
            rounded-xl
            bg-blue-600
            px-4
            py-2
            text-center
            text-white
            "
          >
            Login
          </Link>


        </div>

      )}


    </nav>

  );
}