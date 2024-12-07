import React, { useState } from "react";
import { FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function CartCard({ item }) {
  const [number, setNumber] = useState(0);
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
        fetch(`http://localhost:5000/addCart/${_id}`, {
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
            }
          });
      }
    });
  };

  const photo = item.photo;
  const itemName = item.itemName;
  const price = item.price;
  const username = item.displayName;
  const email = item.email;

  const handleAddCart = (e) => {
    e.preventDefault();
    const addcart = {
      photo,
      itemName,
      price,
      username,
      email,
    };
    fetch("http://localhost:5000/addCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addcart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("successfully added");
          Swal.fire({
            title: "Success!",
            text: "Added One More successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div>
      <div className="mb-4 mt-6 flex border solid border-gray-400 rounded-xl p-4">
        <img
          className="w-24 h-24 object-cover  rounded-xl"
          src={item.photo}
          alt=""
        />
        <div className="md:pl-12 flex flex-col px-6 md:px-0  w-full">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">{item.itemName}</h2>
            <Link className="flex items-center gap-2" to="/addCart">
              <button
                onClick={() => {
                  handleDelete(item._id);
                }}
                className="text-2xl  rounded-sm  m-0   "
              >
                <FaRegMinusSquare />
              </button>
              <p className="text-2xl font-medium">{item.quantity}X</p>
              <button
                onClick={handleAddCart}
                className="text-2xl  rounded-sm  m-0 "
              >
                <FaRegPlusSquare />
              </button>
              {/* <button
                onClick={() => {
                  handleDelete(item._id);
                }}
                className="text-3xl  rounded-full p-0 m-0 font-semibold hover:red-500 text-red-500 "
              >
                <MdDeleteForever />
              </button> */}
            </Link>
          </div>

          <h2 className="my-3">
            <span className="mr-2 font-semibold">Price: </span> {item.price} X{" "}
            {item.quantity}
          </h2>
        </div>
      </div>
    </div>
  );
}
