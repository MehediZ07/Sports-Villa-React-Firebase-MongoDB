import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ReactStars from "react-stars";
export default function Equipment({ equipment }) {
  return (
    <div
      key={equipment._id}
      className="text-center duration-300 hover:scale-[1.02]"
    >
      <img
        src={equipment?.photo}
        alt="Sport bottle"
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="mt-4 text-sm font-medium text-gray-500">
        {equipment?.itemName}
      </h3>
      <div className="flex items-center justify-center space-x-1 text-yellow-600 py-2 px-3 rounded-md  text-center">
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
      </div>
      <p className="text-lg mb-2 font-semibold text-gray-500">
        ${equipment?.price}
      </p>
      <Link to={`/detailsEquipment/${equipment._id}`}>
        <span className="font-base text-sm px-2 py-1 rounded-full border-2 solid">
          View More
        </span>
      </Link>
    </div>
  );
}
