"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me",
  },
  {
    name: "noofprojects",
    placeholder: "No of projects",
    type: "text",
    label: "Enter no of projects",
  },
  {
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Enter no of experience",
  },
  {
    name: "noofclients",
    placeholder: "No of clients",
    type: "text",
    label: "Enter no of clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "Skills",
  },
];

export default function AdminAboutView({formData, setFormData , handleSaveData}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
          Admin About View
        </h1>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button onClick={()=> handleSaveData('about')} className="mt-[10px]  hover:bg-green-500 rounded-lg border border-green-600 p-4 font-bold text-[16px]">
          Add Info
        </button>
      </div>
    </div>
  );
}