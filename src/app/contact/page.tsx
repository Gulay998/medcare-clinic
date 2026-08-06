"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export default function Contact(){

const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

const [error, setError] = useState("");
const [success, setSuccess] = useState(false);

return (

<main className="min-h-screen bg-blue-50 py-20">

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl"
>

<h1 className="text-center text-5xl font-bold text-blue-600">
Contact Us
</h1>

<p className="mt-4 text-center text-gray-600">
We are ready to help you with professional medical care.
</p >


<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">


<div className="rounded-xl bg-blue-50 p-6 text-center">

<MapPin className="mx-auto h-8 w-8 text-blue-600" />

<h2 className="text-xl font-bold text-blue-600">
Address
</h2>

<p className="mt-2 text-gray-600">
123 Medical Street
</p >
</div>



<div className="rounded-xl bg-blue-50 p-6 text-center">

<Phone className="mx-auto h-8 w-8 text-blue-600" />

<h2 className="text-xl font-bold text-blue-600">
Phone
</h2>

<p className="mt-2 text-gray-600">
+1 234 567 890
</p >
</div>



<div className="rounded-xl bg-blue-50 p-6 text-center">

<Mail className="mx-auto h-8 w-8 text-blue-600" />

<h2 className="text-xl font-bold text-blue-600">
Email
</h2>

<p className="mt-2 text-gray-600">
info@medcare.com
</p >
</div>


</div>



<form
  className="mt-12 space-y-5"
  onSubmit={(e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    setSuccess(true);
  }}
>

<input
className="w-full rounded-xl border p-4"
placeholder="Your Name"
value={form.name}
onChange={(e) =>
  setForm({
    ...form,
    name: e.target.value,
  })
}
/>


<input
className="w-full rounded-xl border p-4"
placeholder="Email"
value={form.email}
onChange={(e) =>
  setForm({
    ...form,
    email: e.target.value,
  })
}
/>


<textarea
className="w-full rounded-xl border p-4"
placeholder="Message"
value={form.message}
onChange={(e) =>
  setForm({
    ...form,
    message: e.target.value,
  })
}
/>

{error && (
  <p className="rounded-xl bg-red-100 p-3 text-center text-red-600">
    {error}
  </p>
)}


{success && (
  <p className="rounded-xl bg-green-100 p-3 text-center text-green-600">
    Message sent successfully! We will contact you soon.
  </p>
)}

<button
className="w-full rounded-xl bg-blue-600 p-4 text-white"
>
Send Message
</button>


</form>


</motion.div>

</main>

)

}