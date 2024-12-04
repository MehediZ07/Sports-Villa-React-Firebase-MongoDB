import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import HeroBanner from "./Header/HeroBanner/HeroBanner";
import { AuthContext } from "../Providers/AuthProvider";
import Equipment from "./Equipment";

const Home = () => {
  const coffees = useLoaderData();
  const { loading } = useContext(AuthContext);
  // better use tanstack query or similar packages
  const [loadedCoffees, setLoadedCoffees] = useState(coffees);

  if (loading) return <span className="loading loading-bars loading-lg"></span>;

  return (
    <div>
      <div>
        <HeroBanner></HeroBanner>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2>Welcome Coffee home: {loadedCoffees.length}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {loadedCoffees.map((coffee) => (
            <Equipment
              coffee={coffee}
              loadedCoffees={loadedCoffees}
              setLoadedCoffees={setLoadedCoffees}
              key={coffee._id}
            ></Equipment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
