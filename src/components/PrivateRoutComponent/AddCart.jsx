import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartCard from "./CartCard";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

export default function AddCart() {
  const { user } = useContext(AuthContext);
  const [loaging, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotal, setSubTotal] = useState(60);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:5000/addCart")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch");
          }
          return response.json();
        })
        .then((json) => {
          setCart(json);
          console.log(json);
          setLoading(false);
        })
        // eslint-disable-next-line no-unused-vars
        .catch((err) => {
          setLoading(false);
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 500);
    return () => clearInterval(interval);
  }, []);

  const filteredEquipment = cart.filter(
    (equipment) => equipment.email === user?.email
  );

  const cartWithQuantity = Object.values(
    filteredEquipment.reduce((acc, product) => {
      if (acc[product.itemName]) {
        acc[product.itemName].quantity += 1;
      } else {
        acc[product.itemName] = { ...product, quantity: 1 };
      }
      return acc;
    }, {})
  );

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  useEffect(() => {
    const totalPrices = filteredEquipment.reduce((total, item) => {
      const price = parseFloat(item.price || 0);
      return total + price;
    }, 0);
    setTotalPrice(totalPrices);
    setSubTotal(totalPrices + 60);
  }, [cart]);

  const clearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Purches",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Purches!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/clearCart", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to clear the cart.");
            }
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Purches!",
                text: "Purches Successly.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  if (loaging) return <span className="loading loading-bars loading-lg"></span>;

  return (
    <div className="max-w-6xl mx-auto my-12">
      {filteredEquipment.length === 0 ? (
        <div className="flex gap-4 flex-col justify-center items-center  h-[500px]">
          <h2 className="text-5xl">
            Please add any product on your cart list first
          </h2>
          <p>I wish You find the best product for you</p>
          <button onClick={goToHome} className="btn">
            Go Home
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-bold  w-fit text-gray-500 -mt-6 border-2 rounded-full px-4 py-[.6rem] solid border-gray-200">
            <span className="font-bold text-xl text-[#05af7ccb] mr-2">
              Total Product:
            </span>
            {filteredEquipment.length}
          </h1>
          <div>
            {cartWithQuantity.map((item, i) => (
              <CartCard key={i} item={item}></CartCard>
            ))}
          </div>
          <div className="flex justify-between ">
            <h1 className="text-lg w-fit text-gray-500 font-semibold border-2 rounded-full px-4 py-[.6rem] solid border-gray-200">
              <span className="font-bold text-xl text-[#05af7ccb]">
                Total Price:
              </span>
              {" $"} {totalPrice.toFixed(2)}
            </h1>
            <div className="flex flex-col text-right justify-end">
              <h1>Product Price: {totalPrice.toFixed(2)}</h1>
              <h1>Delivary Charge: $60.00</h1>
            </div>
          </div>
          <div className="divider"></div>
          <h1 className="w-full text-right">
            Sub Total Price: {subTotal.toFixed(2)}
          </h1>
          <div className="flex justify-end mt-6">
            <button
              className="text-lg w-fit text-[#05af7ccb] font-semibold border-2 rounded-full px-4 py-[.6rem] solid border-[#05af7ccb]
              "
              onClick={clearCart}
            >
              Purches
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
