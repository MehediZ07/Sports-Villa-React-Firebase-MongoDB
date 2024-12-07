import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../Providers/AuthProvider";
import { Fade } from "react-awesome-reveal";
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Fade>
          <div className="flex flex-col items-center">
            <svg
              className="h-24 w-24 animate-spin"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-20"
                cx="25"
                cy="25"
                r="20"
                strokeWidth="5"
                stroke="#e2e8f0"
                fill="none"
              ></circle>
              <circle
                className="stroke-gradient-to-r"
                cx="25"
                cy="25"
                r="20"
                strokeWidth="5"
                stroke="url(#gradient)"
                strokeDasharray="31.415, 31.415"
                fill="none"
                strokeLinecap="round"
              ></circle>
              <defs>
                <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-lg font-semibold text-gray-700 mt-4">
              Loading, please wait...
            </p>
          </div>
        </Fade>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  //   state={location.pathname}

  return <Navigate state={location.pathname} to={"/signin"}></Navigate>;
};

export default PrivateRoute;
