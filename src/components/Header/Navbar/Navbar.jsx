import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import TheemToggle from "../../TheemToggle";
import { FaCircleUser } from "react-icons/fa6";
import logo from "../../../assets/logo.png";
import Headroom from "react-headroom";
import { IoMdCart } from "react-icons/io";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [loaging, setLoading] = useState(true);
  const [cart, setCart] = useState({});

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

  if (loaging) return <span className="loading loading-bars loading-lg"></span>;

  const filteredEquipment = cart.filter(
    (equipment) => equipment.email === user?.email
  );

  const links = (
    <>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #00e0a1, #00b0e0, #0088cc)",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: "#374151",
                }
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/allEquipent"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #00e0a1, #00b0e0, #0088cc)",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: "#374151",
                }
          }
        >
          All Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/myEquipent"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #00e0a1, #00b0e0, #0088cc)",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: "#374151",
                }
          }
        >
          My Equipment
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink ml-1"
          to="/addEquipment"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #00e0a1, #00b0e0, #0088cc)",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: "#374151",
                }
          }
        >
          Add Equipment
        </NavLink>
      </li>

      <li>
        <NavLink
          className="navlink ml-1"
          to="/myProfile"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #00e0a1, #00b0e0, #0088cc)",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "#ffffffa0",
                  color: "#374151",
                }
          }
        >
          My profile
        </NavLink>
      </li>
    </>
  );

  return (
    <Headroom style={{ zIndex: 1000 }}>
      <div className="navbar p-0 bg-base-100 max-w-7xl mx-auto bg-opacity-50 backdrop-blur-sm  bg-transparent ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="items-center flex">
            <Link
              to="/"
              className="btn -mt-4 bg-transparent hover:bg-transparent border-none p-2"
            >
              <img className="h-10 " src={logo} alt="Logo" />
            </Link>
            <TheemToggle></TheemToggle>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-4 mt-2">
            <Link
              to="/addCart"
              className="p-1  cursor-pointer rounded-full text-xl "
            >
              <div className="relative">
                <span className=" absolute translate-x-2 -top-[1.1rem] text-base ml-1 badge ">
                  {!loaging ? filteredEquipment.length : "0"}
                </span>
                <div className="text-3xl">
                  <IoMdCart />
                </div>
              </div>
            </Link>
          </div>
          <div className=" mr-2">
            {user && user?.email ? (
              <div className="relative h-full hover:scale-90 group w-fit">
                <Link to="/">
                  <img
                    src={user?.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full mt-2 mx-auto mb-2 border-2 solid border-green-400"
                  />
                </Link>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full h-6 -mb-[.5rem] w-36 bg-gradient-to-r from-[#00e0a1] via-[#00b0e0]  to-[#1bb3ff] text-white  rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-50">
                  <p className="text-center font-bold">{user.displayName}</p>
                </div>
              </div>
            ) : (
              <div className="text-[2.7rem] text-[#faa2a0]">
                <FaCircleUser></FaCircleUser>
              </div>
            )}
          </div>

          {user && user?.email ? (
            <button
              onClick={logOut}
              className="btn btn-sm h-10 bg-gradient-to-r from-[#faa2a0]  to-[#faa1a092] text-gray-600 font-bold  "
            >
              Log-Out
            </button>
          ) : (
            <Link
              to="/signin"
              className="btn btn-sm h-10 bg-[#bbe6dd] hover:bg-[#b5eade]  text-gray-600 font-bold  "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </Headroom>
  );
};

export default Header;
