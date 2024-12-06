import React from "react";
import { useLoaderData } from "react-router-dom";

export default function DetailsEquipment() {
  const equipment = useLoaderData();
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={equipment.photo}
            alt={equipment.itemName}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">{equipment.itemName}</h1>
          <p className="text-gray-700 mb-4">{equipment.description}</p>

          <div className="mb-4">
            <span className="font-bold">Category:</span> {equipment.category}
          </div>

          <div className="mb-4">
            <span className="font-bold">Rating:</span> {equipment.rating} / 5
          </div>

          <div className="mb-4">
            <span className="font-bold">Price:</span> ${equipment.price}
          </div>

          <div className="mb-4">
            <span className="font-bold">Customization Available:</span>{" "}
            {equipment.customization}
          </div>

          <div className="mb-4">
            <span className="font-bold">Processing Time:</span>{" "}
            {equipment.processingTime} days
          </div>

          <div className="mb-4">
            <span className="font-bold">Stock Status:</span>{" "}
            {equipment.stockStatus} items available
          </div>

          <div className="mb-4">
            <span className="font-bold">Seller:</span> {equipment.username}
          </div>

          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
