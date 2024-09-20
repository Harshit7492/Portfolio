"use client";

import { useRouter } from "next/navigation";
import FormControls from "../form-controls";

const controls = [
  {
    name: "username",
    placeholder: "Enter User name",
    type: "text",
    label: "User Name",
  },
  {
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    label: "Password",
  },
];

export default function Login({ formData, setFormData, handleLogin }) {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-fit bg-white shadow-lg rounded-lg px-8 py-6">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
          Admin Login View
        </h1>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={handleLogin}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Login
        </button>
        <button
          onClick={() => router.back()} className="mt-7 ml-5 text-xl text-blue-400 bold"
        >
          Go To Back
        </button>
      </div>
    </div>
  );
}
