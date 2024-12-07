import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function Equipment({
  equipment,
  loadedEquipment,
  setLoadedEquipment,
}) {
  const {
    _id,
    photo,
    itemName,
    rating,
    description,
    price,
    category,
    customization,
    processingTime,
    stockStatus,
    username,
  } = equipment;

  return (
    <div className=" rounded-lg overflow-hidden shadow-sm transform transition-all   hover:shadow-lg bg-transparent h-fit w-64 ">
      <img
        className="w-full h-32 object-cover rounded-t-lg"
        src={photo}
        alt={itemName}
      />

      <div className="px-2 py-2 bg-base-100 rounded-b-lg shadow-xl hover:shadow-2xl transform  transition duration-300">
        <div className="flex flex-col justify-between gap-4 border-b pb-3 mb-2">
          <h2 className="font-semibold text-lg h-8 text-center ">{itemName}</h2>

          <p className="text-sm text-start w-fit bg-blue-100 text-blue-700 px-2 py-1 rounded-full italic">
            Listed by: {username}
          </p>
        </div>

        <div className="flex items-center space-x-1 bg-yellow-100/50 text-yellow-600 py-2 px-3 rounded-md mb-2">
          <span className="font-semibold text-gray-700">Ratting</span>
          {[...Array(Math.floor(rating))].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>

        <p className="text-2xl font-bold text-green-600 mb-3">${price}</p>
        <ul className="text-sm text-gray-500 space-y-2 mb-2">
          <li>
            <span className="font-medium text-gray-400">Category:</span>{" "}
            {category}
          </li>

          <li>
            <span className="font-medium text-gray-400">Stock:</span>{" "}
            {stockStatus} items left
          </li>
          <li>
            <Link to={`/detailsEquipment/${equipment._id}`}>
              <span className="font-medium -ml-1 px-2 py-1 rounded-full border-2 solid">
                View More
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
