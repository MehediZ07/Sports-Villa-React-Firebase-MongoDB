import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../Providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <h1>Loding....</h1>;
  }
  if (user && user?.email) {
    return children;
  } 
//   state={location.pathname}

  return <Navigate state={location.pathname}  to={"/signin"}></Navigate>;
};

export default PrivateRoute;