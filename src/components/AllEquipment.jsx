import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Equipment from "./Equipment";

export default function AllEquipment() {
  const equipments = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [loadedEquipment, setLoadedEquipment] = useState(equipments);
  if (loading) return <span className="loading loading-bars loading-lg"></span>;
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center mb-12">
      <div class="text-center">
        <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00e0a1] via-[#00b0e0]  to-[#1bb3ff] text-transparent bg-clip-text">
          All Products
        </h1>

        <h1 class="text-5xl md:text-7xl font-bold text-blue-500 opacity-30 transform -mt-[.75rem] scale-y-[-.8]  bg-gradient-to-t from-blue-500/50 via-blue-300/50 to-transparent bg-clip-text text-transparent">
          All Products
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {loadedEquipment.map((equipment) => (
          <Equipment
            equipment={equipment}
            loadedEquipment={loadedEquipment}
            setLoadedEquipment={setLoadedEquipment}
            key={equipment._id}
          ></Equipment>
        ))}
      </div>
    </div>
  );
}
