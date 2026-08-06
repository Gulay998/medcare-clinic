"use client";

import { motion } from "framer-motion";

const appointments = [
  {
    name: "John Smith",
    doctor: "Dr. Sarah Johnson",
    department: "Cardiology",
    status: "Pending",
  },
  {
    name: "Emma Brown",
    doctor: "Dr. Michael Lee",
    department: "Neurology",
    status: "Approved",
  },
  {
    name: "David Wilson",
    doctor: "Dr. Emily Brown",
    department: "General Medicine",
    status: "Pending",
  },
];


export default function AdminDashboard() {

  return (

    <main className="min-h-screen bg-blue-50 p-8">

      <motion.div
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        className="mx-auto max-w-7xl"
      >

        <h1 className="text-4xl font-bold text-blue-600">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Manage clinic operations
        </p >


        {/* Statistics */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-gray-600">
              Total Patients
            </h2>
            <p className="mt-3 text-4xl font-bold text-blue-600">
              10,000
            </p >
          </div>


          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-gray-600">
              Total Doctors
            </h2>
            <p className="mt-3 text-4xl font-bold text-blue-600">
              15
            </p >
          </div>


          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-gray-600">
              Appointments
            </h2>
            <p className="mt-3 text-4xl font-bold text-blue-600">
              245
            </p >
          </div>

        </div>



        {/* Appointments */}

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-lg">

          <h2 className="text-2xl font-bold text-blue-600">
            Appointment Requests
          </h2>


          <div className="mt-5 space-y-4">

            {appointments.map((item,index)=>(

              <div
                key={index}
                className="rounded-xl bg-blue-50 p-4"
              >

                <p className="font-bold">
                  {item.name}
                </p >

                <p>
                  Doctor: {item.doctor}
                </p >

                <p>
                  Department: {item.department}
                </p >

                <p>
                  Status: {item.status}
                </p >


                <div className="mt-3 flex gap-3">

                  <button className="rounded-lg bg-green-500 px-4 py-2 text-white">
                    Approve
                  </button>

                  <button className="rounded-lg bg-red-500 px-4 py-2 text-white">
                    Reject
                  </button>

                </div>


              </div>

            ))}

          </div>

        </div>



        {/* Management */}

        <div className="mt-10 grid gap-6 md:grid-cols-2">


          <div className="rounded-2xl bg-white p-6 shadow-lg">

            <h2 className="text-2xl font-bold text-blue-600">
              Manage Doctors
            </h2>

            <p className="mt-4 text-gray-600">
              View, edit and add clinic doctors.
            </p >

            <button className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-white">
              Add Doctor
            </button>

          </div>



          <div className="rounded-2xl bg-white p-6 shadow-lg">

            <h2 className="text-2xl font-bold text-blue-600">
              Medical Articles
            </h2>

            <p className="mt-4 text-gray-600">
              Create and manage health articles.
            </p >

            <button className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-white">
              Add Article
            </button>

          </div>


        </div>


      </motion.div>


    </main>

  );
}