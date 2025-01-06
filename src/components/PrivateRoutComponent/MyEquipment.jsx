import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet";
export default function MyEquipment() {
  const myEquipment = useLoaderData();
  const { user, loading } = useContext(AuthContext);
  if (loading) return <span className="loading loading-bars loading-lg"></span>;
  const [loadedEquipment, setLoadedEquipment] = useState(myEquipment);
  const filteredEquipment = loadedEquipment.filter(
    (equipment) => equipment.email === user.email
  );

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-two-rho.vercel.app/equipment/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingEquipment = loadedEquipment.filter(
                (equipment) => equipment._id !== _id
              );
              setLoadedEquipment(remainingEquipment);
            }
          });
      }
    });
  };

  return (
    <div className="mb-12 max-w-7xl mx-auto px-4">
      <Helmet>
        <title>{`My Equipment | Sports Villa`}</title>
        <meta name="description" content="Description of your page" />
      </Helmet>
      <div class="text-center">
        <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00e0a1] via-[#00b0e0]  to-[#1bb3ff] text-transparent bg-clip-text">
          My Equipment
        </h1>

        <h1 class="text-5xl md:text-7xl font-bold text-blue-500 opacity-30 transform -mt-[.75rem] scale-y-[-.8]  bg-gradient-to-t from-blue-500/50 via-blue-300/50 to-transparent bg-clip-text text-transparent">
          My Equipment
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table min-w-[920px] bg-base-100 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-base-300">
            <tr className="text-start">
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEquipment.map((equipment, index) => (
              <tr key={equipment._id} className="hover:bg-base-200">
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={equipment.photo} alt={equipment.itemName} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{equipment.itemName}</div>
                      <div className="badge badge-ghost badge-sm">
                        Listed By: {equipment.username}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">{equipment.category}</td>
                <td className="px-4 py-2 text-center text-green-600 font-bold">
                  ${equipment.price}
                </td>
                <td className="px-4 py-2">
                  <div className="flex justify-center">
                    <ReactStars
                      count={5}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffcc26"
                      value={equipment.rating}
                    />
                  </div>
                </td>
                <td className="px-4 py-2 flex justify-around items-center">
                  <Link to={`/detailsEquipment/${equipment._id}`}>
                    <span className="font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[#00e0a093] via-[#00afe088] to-[#1bb3ff8b] text-white hover:bg-blue-600/50 transition duration-300 shadow-md">
                      View More
                    </span>
                  </Link>
                  <Link to={`/updateEquipment/${equipment._id}`}>
                    <button className="font-medium text-lg flex items-center justify-center w-10 h-10 rounded-full bg-yellow-200 hover:bg-yellow-300 transition duration-300 shadow-md">
                      <FaEdit className="text-yellow-600" />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(equipment._id)}
                    className="font-medium text-lg flex items-center justify-center w-10 h-10 rounded-full bg-red-200 hover:bg-red-300 transition duration-300 shadow-md"
                  >
                    <MdOutlineDeleteForever className="text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
