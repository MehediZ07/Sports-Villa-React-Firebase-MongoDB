import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Equipment from "./Equipment";

export default function AllEquipment() {
  const equipments = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [loadedEquipment, setLoadedEquipment] = useState(equipments);
  const [sort, setSort] = useState("");
  if (loading || !equipments)
    return <span className="loading loading-bars loading-lg"></span>;

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Low-High") {
      const sortedCurtList = [...loadedEquipment].sort(
        (a, b) => a.price - b.price
      );
      setLoadedEquipment(sortedCurtList);
    }

    if (sortType === "High-Low") {
      const sortedCurtList = [...loadedEquipment].sort(
        (a, b) => b.price - a.price
      );
      setLoadedEquipment(sortedCurtList);
    }
    if (sortType === "") {
      setLoadedEquipment(equipments);
    }
  };

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
      <div className="dropdown mb-6  rounded-xl">
        <div
          tabIndex={0}
          role="button"
          className="btn text-[#38e2c3] hover:bg-[#c9fdf086] hover:border-2 border rounded-full px-6 border-[#38e2b7] hover:border-[#31ffd6] solid bg-transparent m-1"
        >
          {!sort ? "Sort by" : `Sort By - ${sort}`}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu  bg-base-200 rounded-box z-[1] w-fit p-2 shadow"
        >
          <li
            className=" bg-base-100  hover:border-[#38e2ba] border-2 solid border-[#38e2ba] mb-2 w-24 rounded-lg"
            onClick={() => handleSort("Low-High")}
          >
            <a>Low-High</a>
          </li>
          <li
            className=" bg-base-100  hover:border-[#38e2ba] border-2 solid border-[#38e2ba] w-24  rounded-lg"
            onClick={() => handleSort("High-Low")}
          >
            <a>High-Low</a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
