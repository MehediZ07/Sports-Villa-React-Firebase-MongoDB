import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

export default function UpdateEquipment() {
  const equipment = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    itemName,
    description,
    price,
    photo,
    rating,
    category,
    customization,
    processingTime,
    stockStatus,
    email,
    username,
  } = equipment;

  const handleUpdateCoffee = (e) => {
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

    const update = {
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

    // send data to the server and database
    fetch(`https://assignment-10-server-two-rho.vercel.app/equipment/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <form
      onSubmit={handleUpdateCoffee}
      className="max-w-full sm:max-w-4xl mx-auto p-6 bg-base-100 rounded-lg border-4 solid border-gray-200 mb-10"
    >
      <div className="flex items-center gap-4 mb-6 w-fit mx-auto overflow-hidden">
        <div className="w-20 h-20 rounded-full">
          <img
            className="w-full h-full rounded-full"
            src={user?.photoURL}
            alt={user ? user.displayName : ""}
          />
        </div>

        <div>
          <h1 className="text-[#97e5d4] font-semibold text-xl">
            {user ? user.displayName : ""}
          </h1>
          <p className="text-gray-500 italic">{user ? user.email : ""}</p>
        </div>
      </div>
      <div className="divider"></div>
      <h2 className="text-2xl font-bold mb-6">Product Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            defaultValue={photo}
            placeholder="Enter image URL"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            defaultValue={itemName}
            placeholder="Enter item name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Category
          </label>
          <select
            name="category"
            defaultValue={category}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Cricket">Cricket</option>
            <option value="Football">Football</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Price
          </label>
          <input
            type="number"
            name="price"
            defaultValue={price}
            placeholder="Enter price"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Rating
          </label>
          <select
            name="rating"
            defaultValue={rating}
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

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Customization
          </label>
          <input
            type="text"
            name="customization"
            defaultValue={customization}
            placeholder="Enter customization options"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Processing Time (Delivery Time)
          </label>
          <input
            type="text"
            name="processingTime"
            defaultValue={processingTime}
            placeholder="Enter processing time"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-500">
            Stock Status
          </label>
          <input
            type="number"
            name="stockStatus"
            defaultValue={stockStatus}
            placeholder="Enter stock status"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <label className="block text-sm font-medium text-gray-500">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={description}
            placeholder="Enter product description"
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full rounded-md py-2 px-4 bg-gradient-to-r from-[#00e0a093] via-[#00afe088]  to-[#1bb3ff8b] text-white hover:bg-blue-600/50"
        >
          Submit Product
        </button>
      </div>
    </form>
  );
}
