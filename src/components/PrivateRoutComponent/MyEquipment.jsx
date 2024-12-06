import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
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
        fetch(`http://localhost:5000/equipment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // update the loaded coffee state
              const remainingEquipment = loadedEquipment.filter(
                (equipment) => equipment._id !== _id
              );
              setLoadedEquipment(remainingEquipment);
            }
          });
      }
    });
  };

  console.log(filteredEquipment);

  return (
    <div className="mb-12">
      <div class="text-center">
        <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00e0a1] via-[#00b0e0]  to-[#1bb3ff] text-transparent bg-clip-text">
          My Equipment
        </h1>

        <h1 class="text-5xl md:text-7xl font-bold text-blue-500 opacity-30 transform -mt-[.75rem] scale-y-[-.8]  bg-gradient-to-t from-blue-500/50 via-blue-300/50 to-transparent bg-clip-text text-transparent">
          My Equipment
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:max-w-6xl mx-auto max-w-[95%] ">
        {filteredEquipment.map((equipment) => (
          <div className=" rounded-lg overflow-hidden shadow-sm transform transition-all   hover:shadow-lg bg-transparent">
            {/* Image */}
            <img
              className="w-full h-32 object-cover rounded-t-lg"
              src={equipment.photo}
              alt={equipment.itemName}
            />

            <div className="px-2 py-2 bg-base-100 rounded-b-lg shadow-xl hover:shadow-2xl transform  transition duration-300">
              {/* Product Name and Username */}
              <div className="flex flex-col justify-between gap-4 border-b pb-3 mb-2">
                <h2 className="font-semibold text-lg h-8 text-center ">
                  {equipment.itemName}
                </h2>

                <p className="text-sm text-start w-fit bg-blue-100 text-blue-700 px-2 py-1 rounded-full italic">
                  Listed by: {equipment.username}
                </p>
              </div>

              {/* Rating */}
              <h2 className="my-3 font-semibold flex items-center justify-start">
                <span className="mr-2 font-semibold">Rating: </span>
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
              </h2>

              <p className="text-2xl font-bold text-green-600 mb-3">
                ${equipment.price}
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-2">
                <li>
                  <span className="font-medium text-gray-400">Category:</span>{" "}
                  {equipment.category}
                </li>

                <li>
                  <span className="font-medium text-gray-400">Stock:</span>{" "}
                  {equipment.stockStatus} items left
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <Link to={`/detailsEquipment/${equipment._id}`}>
                      <span className="font-medium px-2 py-1 rounded-full border-2 solid">
                        View More
                      </span>
                    </Link>
                    <Link to={`/updateEquipment/${equipment._id}`}>
                      <button className="font-medium text-2xl  px-2  py-1 rounded-full ">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(equipment._id)}
                      className="font-medium text-3xl text-red-400  px-2  py-1 rounded-full "
                    >
                      <MdOutlineDeleteForever />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
