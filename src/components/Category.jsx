import React, { useState, useEffect } from "react";

export default function Category({ equipments, category }) {
  const categoryEquipment = equipments.filter(
    (equipment) => equipment.category === category.categoryName
  );

  const equipmentsData = categoryEquipment.slice(0, 4);

  console.log(equipmentsData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {equipmentsData.map((equipment) => (
        <div key={equipment._id} className="text-center">
          <img
            src={equipment.photo}
            alt="Sport bottle"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-sm font-medium text-gray-500">
            {equipment.itemName}
          </h3>
          <div className="flex items-center justify-center space-x-1 text-yellow-600 py-2 px-3 rounded-md mb-2 text-center">
            {[...Array(Math.floor(equipment.rating))].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p className="text-lg font-semibold text-gray-500">
            ${equipment.price}
          </p>
        </div>
      ))}
    </div>
  );
}
