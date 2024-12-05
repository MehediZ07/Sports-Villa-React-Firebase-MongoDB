import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import HeroBanner from "./Header/HeroBanner/HeroBanner";
import { AuthContext } from "../Providers/AuthProvider";
import Equipment from "./Equipment";

const Home = () => {
  const equipments = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [loadedEquipment, setLoadedEquipment] = useState(equipments);

  if (loading) return <span className="loading loading-bars loading-lg"></span>;

  return (
    <div>
      <div>
        <HeroBanner></HeroBanner>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2>Welcome Coffee home: {loadedEquipment.length}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {loadedEquipment.map((equipment) => (
            <Equipment
              equipment={equipment}
              loadedEquipment={loadedEquipment}
              setLoadedEquipment={setLoadedEquipment}
              key={equipment._id}
            ></Equipment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
