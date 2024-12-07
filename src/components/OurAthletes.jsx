import React, { useEffect, useState } from "react";

export default function OurAthletes() {
  const [loaging, setLoading] = useState(true);
  const [athletes, setAthletes] = useState({});

  useEffect(() => {
    fetch("https://assignment-10-server-two-rho.vercel.app/ourAthletes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((json) => {
        setAthletes(json);
        setLoading(false);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loaging) return <span className="loading loading-bars loading-lg"></span>;
  return (
    <div className="athletes-section px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Our athletes</h2>
      </div>
      <p className="text-gray-500 mb-8">
        Explore insights and knowledge in our athletes
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {athletes.map((athlete) => (
          <div
            key={athlete.id}
            className="athlete-card border min-h-48 flex rounded-lg overflow-hidden shadow-sm"
          >
            <img
              src={athlete.image}
              alt={athlete.title}
              className="w-[50%] h-fyll object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-1">
                {athlete.date} · {athlete.category}
              </p>
              <h3 className="text-lg font-semibold mb-2">{athlete.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                {athlete.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
