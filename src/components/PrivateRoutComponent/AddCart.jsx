import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartCard from "./CartCard";

export default function AddCart() {
  const [loaging, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
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

  const cartWithQuantity = Object.values(
    cart.reduce((acc, product) => {
      if (acc[product.itemName]) {
        // Increment the quantity if the product already exists
        acc[product.itemName].quantity += 1;
      } else {
        // Add the product with quantity 1 and retain all other properties
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
    const totalPrices = cart.reduce((total, item) => {
      const price = parseFloat(item.price || 0);
      return total + price;
    }, 0);
    setTotalPrice(totalPrices);
  }, [cart]);

  if (loaging) return <span className="loading loading-bars loading-lg"></span>;

  return (
    <div className="max-w-6xl mx-auto my-12">
      {cart.length === 0 ? (
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
            {cart.length}
          </h1>
          <div>
            {cartWithQuantity.map((item, i) => (
              <CartCard key={i} item={item}></CartCard>
            ))}
          </div>
          <h1 className="text-lg w-fit text-gray-500 font-semibold border-2 rounded-full px-4 py-[.6rem] solid border-gray-200">
            <span className="font-bold text-xl text-[#05af7ccb]">
              Total Price:
            </span>
            {" $"} {totalPrice.toFixed(2)}
          </h1>
        </div>
      )}
    </div>
  );
}
