"use client";

export default function AdminContactView({ data }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
        Admin Contact View
      </h1>
      {data && data.length
        ? data.map((item, index) => (
            <div key={index} className="p-5 border">
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.message}</p>
            </div>
          ))
        : null}
    </div>
  );
}
