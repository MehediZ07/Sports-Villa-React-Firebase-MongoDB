import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../components/Home.jsx";
import SignIn from "../components/SignIn.jsx";
import SignUp from "../components/SignUp.jsx";
import Users from "../components/Users.jsx";
import PrivateRoute from "../components/PrivateRoute.jsx";
import ForgetPass from "../components/ForgetPass.jsx";
import MyProfile from "../components/MyProfile.jsx";
import AddEquipment from "../components/PrivateRoutComponent/AddEquipment.jsx";
import UpdateEquipment from "../components/PrivateRoutComponent/UpdateEquipment.jsx";
import Category from "../components/Category.jsx";
import AllEquipment from "../components/AllEquipment.jsx";
import MyEquipment from "../components/PrivateRoutComponent/MyEquipment.jsx";
import DetailsEquipment from "../components/PrivateRoutComponent/DetailsEquipment.jsx";
import AddCart from "../components/PrivateRoutComponent/AddCart.jsx";
import ErrorPage from "../components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assignment-10-server-two-rho.vercel.app/equipment"),
      },

      {
        path: "addEquipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "updateEquipment/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipment></UpdateEquipment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-two-rho.vercel.app/equipment/${params.id}`
          ),
      },
      {
        path: "detailsEquipment/:id",
        element: (
          <PrivateRoute>
            <DetailsEquipment></DetailsEquipment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-two-rho.vercel.app/equipment/${params.id}`
          ),
      },
      {
        path: "allEquipent",
        element: <AllEquipment></AllEquipment>,
        loader: () =>
          fetch("https://assignment-10-server-two-rho.vercel.app/equipment"),
      },
      {
        path: "myEquipent",
        element: (
          <PrivateRoute>
            <MyEquipment></MyEquipment>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment-10-server-two-rho.vercel.app/equipment"),
      },
      {
        path: "addCart",
        element: (
          <PrivateRoute>
            <AddCart></AddCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment-10-server-two-rho.vercel.app/equipment"),
      },
      {
        path: "category",
        element: <Category></Category>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "forgetpass",
        element: <ForgetPass></ForgetPass>,
      },
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: <Users></Users>,
        loader: () =>
          fetch("https://assignment-10-server-two-rho.vercel.app/users"),
      },
    ],
  },
]);

export default router;
