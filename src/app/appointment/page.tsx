"use client";



import { useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  User,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  Stethoscope
} from "lucide-react";

export default function Appointment() {
  const searchParams = useSearchParams();

const doctorId = searchParams.get("doctor");
const doctors = [
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
  },
  {
    id: "michael-lee",
    name: "Dr. Michael Lee",
    specialty: "Neurologist",
  },
  {
    id: "emily-brown",
    name: "Dr. Emily Brown",
    specialty: "General Doctor",
  },
];

const selectedDoctor = doctors.find(
  (doctor) => doctor.id === doctorId
);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: selectedDoctor?.name || "",
    date: "",
    message: "",
  });


  const [success, setSuccess] = useState(false);

const [error, setError] = useState("");

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  setError("");

if (
  !form.name ||
  !form.email ||
  !form.phone
) {
  setError("Please fill all required fields");
  return;
}

  setSuccess(false);

  if (!form.name || !form.email || !form.phone || !form.date) {
    setError("Please fill all required fields");
    return;
  }

  setSuccess(true);

setForm({
  name: "",
  email: "",
  phone: "",
  doctor: "",
  date: "",
  message: "",
});

  console.log(form);
console.log({
  ...form,
  doctor: selectedDoctor?.name,
});

};


  return (
    <main className="min-h-screen bg-blue-50 py-20">

      {selectedDoctor && (
  <div className="mx-auto mb-8 max-w-md rounded-3xl bg-white p-6 text-center shadow-lg">

    <p className="mb-2 text-sm text-gray-500">
      Selected Doctor
    </p>

    <h2 className="text-2xl font-bold text-gray-800">
      {selectedDoctor.name}
    </h2>

    <p className="mt-2 text-blue-600 font-medium">
      {selectedDoctor.specialty}
    </p>

  </div>
)}

      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 shadow-xl">

{success && (
  <div className="mb-6 rounded-xl bg-green-100 p-4 text-center text-green-700">
    ✅ Appointment submitted successfully
  </div>
)}

{error && (
  <div className="mb-6 rounded-xl bg-red-100 p-4 text-center text-red-700">
    ❌ {error}
  </div>
)}

        <h1 className="text-center text-4xl font-bold text-blue-600">
  Book Your Appointment
</h1>

<p className="mt-3 text-center text-gray-600">
  Choose your doctor and schedule your medical consultation.
</p>


       <form
  className="mt-10 space-y-5"
  onSubmit={(e) => {
    e.preventDefault();

    setSuccess(true);
  }}
>

<h3 className="flex items-center gap-2 text-xl font-bold text-gray-800">
  <User className="h-5 w-5 text-blue-600" />
  Patient Information
</h3>

         <div className="relative">

  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

  <input
    type="text"
    placeholder="Full Name"
    value={form.name}
    onChange={(e) =>
      setForm({
        ...form,
        name: e.target.value,
      })
    }
    className="w-full rounded-xl border p-3 pl-10"
  />

</div>


          <div className="relative">

  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

  <input
    type="email"
    placeholder="Email"
    value={form.email}
    onChange={(e) =>
      setForm({
        ...form,
        email: e.target.value,
      })
    }
    className="w-full rounded-xl border p-3 pl-10"
  />

</div>


         <div className="relative">

  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

  <input
    type="text"
    placeholder="Phone Number"
    value={form.phone}
    onChange={(e) =>
      setForm({
        ...form,
        phone: e.target.value,
      })
    }
    className="w-full rounded-xl border p-3 pl-10"
  />

</div>

<h3 className="mt-8 text-xl font-bold text-gray-800">
  Appointment Details
</h3>

          <div className="relative">

  <Stethoscope className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

  <select
    value={form.doctor}
    onChange={(e) =>
      setForm({
        ...form,
        doctor: e.target.value,
      })
    }
    className="w-full rounded-xl border p-3 pl-10"
  >
            <option>
              Select Doctor
            </option>

            <option>
              Dr. Sarah Johnson
            </option>

            <option>
              Dr. Michael Lee
            </option>

            <option>
              Dr. Emily Brown
            </option>

          </select>

</div>

         <div className="relative">

  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

  <input
    type="date"
    value={form.date}
    onChange={(e) =>
      setForm({
        ...form,
        date: e.target.value,
      })
    }
    className="w-full rounded-xl border p-3 pl-10"
  />

</div>


          <div className="relative">

  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

  <textarea
    placeholder="Message"
    value={form.message}
    onChange={(e) =>
      setForm({
        ...form,
        message: e.target.value,
      })
    }
    className="w-full rounded-xl border p-3 pl-10"
  />

</div>

{error && (
  <p className="rounded-xl bg-red-100 p-3 text-center text-red-600">
    {error}
  </p>
)}

{success && (
  <p className="rounded-xl bg-green-100 p-3 text-center text-green-600">
    Appointment submitted successfully! We will contact you soon.
  </p>
)}

          <button
  type="submit"
  className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
>
  Confirm Appointment
</button>


        </form>


      </div>

    </main>
  );
}