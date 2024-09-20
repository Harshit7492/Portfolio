"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Enter Technologies",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "Github",
  },
];

export default function AdminProjectView({ formData, setFormData, handleSaveData, data }) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
          Admin Project View
        </h1>
        <div className="mb-10">
          {data && data.length
            ? data.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 border p-4 border-green-600">
                  <p>{item.name}</p>
                  <p>{item.technologies}</p>
                  <p>{item.website}</p>
                  <p>{item.github}</p>
                </div>
              ))
            : null}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button onClick={() => handleSaveData('project')} className="mt-[10px] border hover:bg-green-500 rounded-lg border-green-600 p-4 font-bold text-[16px]">
          Add Info
        </button>
      </div>
    </div>
  );
}
