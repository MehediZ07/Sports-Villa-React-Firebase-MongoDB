import React, { useContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

export default function AddEquipment() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const photo = e.target.image.value;
    const itemName = e.target.itemName.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processingTime = e.target.processingTime.value;
    const stockStatus = e.target.stockStatus.value;
    const username = user ? user?.displayName : "";
    const email = user ? user?.email : "";
    const equipment = {
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
      email,
    };

    // Sending the product data to the backend using a POST request
    // send data to the server and database
    // send data to the server and database
    fetch("http://localhost:5000/equipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(equipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("successfully added");
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full sm:max-w-4xl mx-auto p-6 bg-base-100 rounded-lg border-4 solid border-gray-200 mb-10"
    >
      <h2 className="text-2xl font-bold mb-6">Product Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Image */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Item Name */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            placeholder="Enter item name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Category
          </label>
          <select
            name="category"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Cricket">Cricket</option>
            <option value="Football">Football</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Price */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Rating */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Rating
          </label>
          <select
            name="rating"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Rating</option>
            {[1, 2, 3, 4, 5].map((rate) => (
              <option key={rate} value={rate}>
                {rate}
              </option>
            ))}
          </select>
        </div>

        {/* Customization */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Customization
          </label>
          <input
            type="text"
            name="customization"
            placeholder="Enter customization options"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Processing Time */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Processing Time (Delivery Time)
          </label>
          <input
            type="text"
            name="processingTime"
            placeholder="Enter processing time"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Stock Status */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Stock Status
          </label>
          <input
            type="number"
            name="stockStatus"
            placeholder="Enter stock status"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <label className="block text-sm font-medium text-gray-500">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter product description"
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Product
        </button>
      </div>
    </form>
  );
}
