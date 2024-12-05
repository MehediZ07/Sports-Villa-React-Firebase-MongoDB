import React, { useEffect, useState } from "react";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 1 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 4 : currentSlide - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2500);
    return () => clearInterval(intervalId);
  }, [currentSlide]);
  return (
    <div className="carousel w-full h-96 ">
      {/* Slide 1 */}
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co.com/YDqp2yS/d11aecca-ce8d-49a7-b98e-adc7d5dedba7.webp"
          className="w-full opacity-60 object-cover h-96"
          alt="Slide 1"
        />
        <div className="absolute w-full top-1/2 flex items-center  transform justify-center">
          <div className=" max-w-lg text-center -mt-20  flex flex-col items-center mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Basketball Essentials</h1>
            <p className="mb-5 italic font-medium">
              Find premium basketballs, hoops, and accessories crafted for both
              indoor and outdoor play. Gear up for your next game!
            </p>
          </div>
        </div>
        <div className="absolute  flex gap-2 left-1/2 -translate-x-1/2 transform justify-center bottom-5 ">
          <button
            onClick={prevSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co.com/zRn5GcX/4681eecd-845b-4c61-9192-64a95919396c.webp"
          className="w-full opacity-60 object-cover h-96"
          alt="Slide 2"
        />
        <div className="absolute w-full top-1/2 flex items-center  transform justify-center">
          <div className="max-w-lg -mt-24 text-center flex flex-col items-center mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Tennis & Badminton Hub</h1>
            <p className="mb-5 italic font-medium">
              Discover lightweight rackets, shuttlecocks, and tennis balls.
              Perfect for court enthusiasts seeking top-tier equipment.
            </p>
          </div>
        </div>
        <div className="absolute  flex gap-2 left-1/2 -translate-x-1/2 transform justify-center bottom-5 ">
          <button
            onClick={prevSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 3 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co.com/ZXwKG6x/f4d2ddb9-baed-4842-b8a0-2fc0706aff81.webp"
          className="w-full opacity-60 object-cover h-96"
          alt="Slide 3"
        />
        <div className="absolute w-full top-1/2 flex items-center  transform justify-center">
          <div className="max-w-lg -mt-20 text-center flex flex-col items-center mx-auto">
            <h1 className="mb-5 text-5xl font-bold"> Cricket Gear Zone</h1>
            <p className="mb-5 italic font-medium">
              Explore top-quality cricket equipment, from bats to gloves.
              Perfect for players of all levels, designed for performance and
              comfort.
            </p>
          </div>
        </div>
        <div className="absolute  flex gap-2 left-1/2 -translate-x-1/2 transform justify-center bottom-5 ">
          <button
            onClick={prevSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Slide 4 */}
      <div
        className={`carousel-item relative w-full ${
          currentSlide === 4 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://i.ibb.co.com/1J2Dgw9/v2-8p4u2-a1ftg.jpg"
          className="w-full opacity-60 object-cover h-96"
          alt="Slide 4"
        />
        <div className="absolute w-full top-1/2 flex items-center  transform justify-center">
          <div className="max-w-lg -mt-24 text-center flex flex-col items-center mx-auto">
            <h1 className="mb-5 text-5xl font-bold">
              {" "}
              Football Shoes & Accessories
            </h1>
            <p className="mb-5 italic font-medium">
              Step into style and performance with our versatile collection of
              sports shoes. Designed for athletes and everyday comfort.
            </p>
          </div>
        </div>
        <div className="absolute  flex gap-2 left-1/2 -translate-x-1/2 transform justify-center bottom-5 ">
          <button
            onClick={prevSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="px-4 w-10 h-10 rounded-full  bg-transparent hover:bg-black/20 hover:border border-black solid"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
