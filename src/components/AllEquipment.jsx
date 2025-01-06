import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Equipment from "./Equipment";
import ReactStars from "react-stars";
import { Helmet } from "react-helmet";
export default function AllEquipment() {
  const equipments = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [loadedEquipment, setLoadedEquipment] = useState(equipments);
  const [sort, setSort] = useState("");
  if (loading || !equipments)
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );

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
      <Helmet>
        <title>{`All Equipment | Sports Villa`}</title>
        <meta name="description" content="Description of your page" />
      </Helmet>
      {/* <div class="text-center">
        <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00e0a1] via-[#00b0e0]  to-[#1bb3ff] text-transparent bg-clip-text">
          All Products
        </h1>

        <h1 class="text-5xl md:text-7xl font-bold text-blue-500 opacity-30 transform -mt-[.75rem] scale-y-[-.8]  bg-gradient-to-t from-blue-500/50 via-blue-300/50 to-transparent bg-clip-text text-transparent">
          All Products
        </h1>
      </div> */}

      <div className="max-w-7xl mx-auto ">
        {/* <div className="px-3 py-6">
          <h2 className="text-3xl text-[#23bf9ba7] font-bold">
            Product show in table formate
          </h2>
          <p className="text-gray-500 mt-2">
            Here, all the product howcase in table below.
          </p>
        </div> */}
        {/* Small Device  */}
        {/* <div className="overflow-x-auto md:hidden w-full">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Price</th>
                <th> View Details</th>
              </tr>
            </thead>
            <tbody>
              {loadedEquipment.map((equipment, index) => (
                <tr key={equipment?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-8 w-8">
                          <img
                            src={equipment?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">
                          {equipment?.itemName}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{equipment?.price}</td>
                  <th>
                    <Link to={`/detailsEquipment/${equipment._id}`}>
                      <span className="font-medium text-xs -ml-1 p-1 rounded-full   bg-gradient-to-r from-[#00e0a093] via-[#00afe088]  to-[#1bb3ff8b] text-white hover:bg-blue-600/50">
                        View More
                      </span>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        {/* Large Device  */}
        {/* <div className="overflow-x-auto hidden md:block w-full">
          <table className="table lg:w-[60rem] xl:w-[73rem]">
            <thead>
              <tr>
                <th>Total: {loadedEquipment.length}</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th> View Details</th>
              </tr>
            </thead>
            <tbody>
              {loadedEquipment.map((equipment, index) => (
                <tr key={equipment?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={equipment?.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{equipment?.itemName}</div>
                        <div className="badge badge-ghost badge-sm">
                          Listed By: {equipment?.username}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{equipment?.category}</td>
                  <td>{equipment?.price}</td>
                  <td>
                    <ReactStars
                      count={5}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffcc26"
                      value={equipment?.rating}
                    />
                  </td>
                  <th>
                    <Link to={`/detailsEquipment/${equipment._id}`}>
                      <span className="font-medium text-sm -ml-1 p-2 py-1 rounded-full   bg-gradient-to-r from-[#00e0a093] via-[#00afe088]  to-[#1bb3ff8b] text-white hover:bg-blue-600/50">
                        View More
                      </span>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
      <div className="w-full flex justify-between max-w-7xl px-4">
        <div className=" py-6 text-start">
          <h2 className="text-3xl text-[#23bf9ba7] font-bold">
            All Equipments
          </h2>
          <p className="text-gray-500 mt-2">
            Here, all the product card howcase below.
          </p>
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl  mx-auto px-4">
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
