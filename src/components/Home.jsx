import React, { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import HeroBanner from "./Header/HeroBanner/HeroBanner";
import { AuthContext } from "../Providers/AuthProvider";
import Equipment from "./Equipment";
import ourProduct from "../assets/Our Product.jpeg";

import OurAthletes from "./OurAthletes";
import Category from "./Category";
import OurPartner from "./OurPartner";

const Home = () => {
  const equipments = useLoaderData();
  const { loading } = useContext(AuthContext);
  const [loadedEquipment, setLoadedEquipment] = useState(equipments);

  const [showAll, setShowAll] = useState(false);

  const equipmentsData = showAll
    ? loadedEquipment
    : loadedEquipment.slice(0, 8);

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

  if (loading) return <span className="loading loading-bars loading-lg"></span>;

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
        <div className="bg-base-100 py-8 px-4 md:px-16 relative">
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
              {/* Left Image Section */}
              <div className="relative group">
                <img
                  src={category.Image}
                  alt="Equipment"
                  className="rounded-lg object-cover w-full h-96 sm:min-h-96 sm:h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 rounded-lg opacity-100 transition-opacity">
                  <h3 className="text-white font-semibold text-xl">
                    {category.categoryName} Equipments
                  </h3>
                </div>
              </div>
              {/* Right Product List */}
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
              className="px-4  text-2xl bg-gradient-to-l from-[#00e0a093] via-[#00afe088]  to-[#1bb3ff8b] rounded-lg shadow "
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="px-4  text-3xl bg-gradient-to-r from-[#00e0a093] via-[#00afe088]  to-[#1bb3ff8b] rounded-lg shadow "
            >
              →
            </button>
          </div>
        </div>

        <div>
          <div className=" max-w-[98%] overflow-hidden mx-auto mt-12">
            {/* Top Section with Heading */}
            <div className="px-8 py-6">
              <h2 className="text-3xl font-bold">
                Professional sports products
              </h2>
              <p className="text-gray-600 mt-2">
                We specialize in a variety of professional sports products.
              </p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between bg-[#00afe088] text-white px-8 py-10 ">
              {/* Left Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-1/2">
                {/* Card 1 */}
                <div className="flex flex-col items-center">
                  <div className="text-4xl mb-2">🏈</div>
                  <h3 className="text-lg font-semibold mb-1">
                    A friendly team works for you
                  </h3>
                  <p className="text-sm text-center">
                    Some teams bring a smile to your face, while others are
                    truly supportive.
                  </p>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col items-center">
                  <div className="text-4xl mb-2">🎯</div>
                  <h3 className="text-lg font-semibold mb-1">
                    Professional grade equipment
                  </h3>
                  <p className="text-sm text-center">
                    Professional grade equipment not only meets expectations but
                    also surpasses them.
                  </p>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col items-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <h3 className="text-lg font-semibold mb-1">
                    Time-tested product manufacturers
                  </h3>
                  <p className="text-sm text-center">
                    Time-tested product trusted manufacturers deliver reliable
                    goods.
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-[90%]  lg:w-1/2 flex justify-center lg:justify-end  lg:mt-0 relative">
                <div className="relative w-full pb-[56.25%] lg:-mt-36 h-0">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/NXFVohLkWok?si=utKg9y7Z5pDRuZnu"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OurAthletes></OurAthletes>
        <OurPartner></OurPartner>
      </div>
    </div>
  );
};

export default Home;
