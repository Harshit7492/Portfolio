"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "Job Profile",
  },
];

export default function AdminExperienceView({
  formData,
  handleSaveData,
  setFormData,
  data,
}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
          Admin Experience View
        </h1>
        <div className="mb-10">
          {data && data.length
            ? data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 border p-4 border-green-600"
                >
                  <p>{item.position}</p>
                  <p>{item.company}</p>
                  <p>{item.duration}</p>
                  <p>{item.location}</p>
                  <p>{item.jobprofile}</p>
                </div>
              ))
            : null}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("experience")}
          className="mt-[10px] border border-green-600 p-4 hover:bg-green-500 rounded-lg font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
