import React from "react";

export default function ProfessionalSports() {
  return (
    <div className=" px-4 w-full overflow-hidden mx-auto mb-10 mt-4">
      <div className=" py-6">
        <h2 className="text-3xl font-bold">Professional sports products</h2>
        <p className="text-gray-600 mt-2">
          We specialize in a variety of professional sports products.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#00afe088] text-white px-8 py-10 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-1/2">
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl mb-2 animate-bounce">⚽</div>
            <h3 className="text-lg font-semibold mb-1">Soccer / Football</h3>
            <p className="text-sm text-center">
              We have all king of equipments and also have training kit.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="text-4xl mb-2 shakeX ">🏏</div>
            <h3 className="text-lg font-semibold mb-1">Cricket</h3>
            <p className="text-sm text-center">
              We have profetional and entry lavel cricket equipments.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2 shakeX ">🏸</div>
            <h3 className="text-lg font-semibold mb-1">Others</h3>
            <p className="text-sm text-center">
              We delevared all kind of seasonal sports equipmens.
            </p>
          </div>
        </div>

        <div className="w-[90%] mt-6  lg:w-1/2 flex justify-center lg:justify-end  lg:mt-0 relative">
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
  );
}
