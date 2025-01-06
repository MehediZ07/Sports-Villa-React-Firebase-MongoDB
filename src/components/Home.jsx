import React, { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

import HeroBanner from "./Header/HeroBanner/HeroBanner";
import { AuthContext } from "../Providers/AuthProvider";
import Equipment from "./Equipment";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import OurAthletes from "./OurAthletes";
import Category from "./Category";
import OurPartner from "./OurPartner";
import ProfessionalSports from "./ProfessionalSports";

import FeaturesSection from "./FeaturesSection";
const Home = () => {
  const equipments = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [loadedEquipment, setLoadedEquipment] = useState(equipments);

  const [showAll, setShowAll] = useState(false);

  const equipmentsData = showAll
    ? loadedEquipment
    : loadedEquipment.slice(0, 10);

  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 1 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1);
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2500);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const categorys = [
    {
      categoryName: "Football",
      Image: "https://i.ibb.co.com/q5JWTmc/Getty-Images-955410340.webp",
    },

    {
      categoryName: "Cricket",
      Image: "https://i.ibb.co.com/2tjVyXj/R.jpg",
    },
    {
      categoryName: "Others",
      Image:
        "https://i.ibb.co.com/M2qNB9h/8d786dc72bbd888498a500f793a9f2da.jpg",
    },
  ];

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Helmet>
          <title>{`Home | Sports Villa`}</title>
          <meta name="description" content="Description of your page" />
        </Helmet>
        <Zoom>
          <div className="flex flex-col items-center">
            <svg
              className="animate-spin h-auto w-[50%] text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            <p className="text-lg font-semibold text-gray-700 mt-4">
              Loading, please wait...
            </p>
          </div>
        </Zoom>
      </div>
    );

  return (
    <div>
      <div>
        <HeroBanner></HeroBanner>
      </div>
      <div className="max-w-7xl mx-auto mt-10 flex flex-col items-center">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00e0a093] via-[#00afe088]  to-[#1bb3ff8b] text-transparent bg-clip-text">
            Our Products
          </h1>

          <h1 class="text-5xl md:text-7xl font-bold text-blue-500 opacity-30 transform -mt-[.75rem] scale-y-[-.8]  bg-gradient-to-t from-blue-500/50 via-blue-300/50 to-transparent bg-clip-text text-transparent">
            Our Products
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto px-4">
          {equipmentsData.map((equipment) => (
            <Equipment
              equipment={equipment}
              loadedEquipment={loadedEquipment}
              setLoadedEquipment={setLoadedEquipment}
              key={equipment._id}
            ></Equipment>
          ))}
        </div>
        <Link
          to="/allEquipent"
          className="px-4 my-6 py-2 w-fit mx-auto col-span-1 lg:col-span-2 bg-gradient-to-r from-[#00e0a093] via-[#00afe088]  to-[#1bb3ff8b] text-white font-semibold rounded "
        >
          See Our All Products
        </Link>
        <div className="bg-base-100 py-8 px-4 relative">
          <div class="text-center">
            <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00e0a093] via-[#00afe088]  to-[#1bb3ff8b] text-transparent bg-clip-text">
              Our Category
            </h1>

            <h1 class="text-5xl md:text-7xl font-bold text-blue-500 opacity-30 transform -mt-[.75rem] scale-y-[-.8]  bg-gradient-to-t from-blue-500/50 via-blue-300/50 to-transparent bg-clip-text text-transparent">
              Our Category
            </h1>
          </div>

          {categorys.map((category, i) => (
            <div
              key={i}
              className={`grid carousel-item grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8  ${
                currentSlide === i + 1 ? "block" : "hidden"
              }`}
            >
              <div className="relative group">
                <img
                  src={category?.Image}
                  alt="Equipment"
                  className="rounded-lg object-cover w-full h-96 sm:min-h-96 sm:h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 rounded-lg opacity-100 transition-opacity">
                  <h3 className="text-white font-semibold text-xl">
                    {category?.categoryName} Equipments
                  </h3>
                </div>
              </div>

              <div className="md:col-span-2 lg:col-span-4">
                <h2 className="text-2xl font-semibold ">Feature Product</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Discover what's rising to the top in the world of fashion,
                  technology, and culture.
                </p>
                <Category
                  equipments={equipments}
                  category={category}
                ></Category>
              </div>
            </div>
          ))}
          <div className="flex gap-2 mx-auto absolute top-[32rem] sm:top-24 md:top-40 right-5 justify-center">
            <button
              onClick={prevSlide}
              className="px-4  text-3xl bg-gradient-to-l from-[#00e0a093] via-[#00afe088]  to-[#1bb3ff8b] rounded-lg shadow text-white font-bold pb-1"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="px-4  text-3xl bg-gradient-to-r from-[#00e0a093] via-[#00afe088]  to-[#1bb3ff8b] rounded-lg text-white font-bold  pb-1 shadow "
            >
              →
            </button>
          </div>
        </div>
        <ProfessionalSports />
        <OurAthletes></OurAthletes>

        <FeaturesSection></FeaturesSection>

        <OurPartner></OurPartner>
      </div>
    </div>
  );
};

export default Home;
