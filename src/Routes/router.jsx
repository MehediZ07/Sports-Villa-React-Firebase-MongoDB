import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../components/Home.jsx";
import AddCoffee from "../components/AddCoffee.jsx";
import UpdateCoffee from "../components/UpdateCoffee.jsx";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/equipment"),
      },
      {
        path: "addCoffee",
        element: (
          <PrivateRoute>
            <AddCoffee></AddCoffee>
          </PrivateRoute>
        ),
      },
      {
        path: "addEquipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "updateEquipment/:id",
        element: <UpdateEquipment></UpdateEquipment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipment/${params.id}`),
      },
      {
        path: "detailsEquipment/:id",
        element: <DetailsEquipment></DetailsEquipment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipment/${params.id}`),
      },
      {
        path: "allEquipent",
        element: <AllEquipment></AllEquipment>,
        loader: () => fetch("http://localhost:5000/equipment"),
      },
      {
        path: "myEquipent",
        element: <MyEquipment></MyEquipment>,
        loader: () => fetch("http://localhost:5000/equipment"),
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
        element: <MyProfile></MyProfile>,
      },
      {
        path: "users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);

export default router;
