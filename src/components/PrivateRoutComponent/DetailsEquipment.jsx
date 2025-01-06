import React, { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";
import { IoMdCart } from "react-icons/io";
import { RiArrowGoBackLine } from "react-icons/ri";
export default function DetailsEquipment() {
  const location = useLocation();
  const equipment = useLoaderData();
  const { user } = useContext(AuthContext);
  const photo = equipment.photo;
  const itemName = equipment.itemName;
  const price = equipment.price;
  const username = user?.displayName;
  const email = user?.email;
  const navigate = useNavigate();

  const handleAddCart = () => {
    if (!user) {
      navigate("/signin", { state: { from: location.pathname } });
      return;
    }
    const addcart = {
      photo,
      itemName,
      price,
      username,
      email,
    };
    fetch("https://assignment-10-server-two-rho.vercel.app/addCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addcart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add to Cart successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-lg shadow-md mb-12 mt-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={equipment.photo}
            alt={equipment.itemName}
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">{equipment.itemName}</h1>
          <p className="text-gray-500 mb-4">{equipment.description}</p>

          <div className="mb-4">
            <span className="font-bold">Category:</span> {equipment.category}
          </div>

          <div className="mb-4">
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

          <div className="flex items-center gap-6">
            <button
              onClick={handleAddCart}
              className="w-fit flex items-center gap-2 bg-gradient-to-r from-[#00e0a093] via-[#00afe088]  to-[#1bb3ff8b] text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Add to Cart <IoMdCart />
            </button>
            <button
              onClick={() => {
                handleGoBack();
              }}
              className=" p-[.6rem] rounded-md border-2 solid border-gray-400 text-base"
            >
              <RiArrowGoBackLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
