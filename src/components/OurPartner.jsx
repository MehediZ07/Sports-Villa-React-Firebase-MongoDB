import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
export default function OurPartner() {
  const [loaging, setLoading] = useState(true);
  const [partners, setPartner] = useState({});

  useEffect(() => {
    fetch("https://assignment-10-server-two-rho.vercel.app/ourPartner")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((json) => {
        setPartner(json);
        setLoading(false);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loaging) return <span className="loading loading-bars loading-lg"></span>;
  return (
    <div className="px-6 py-10 w-[99.99%] max-w-7xl mx-auto overflow-hidden">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-bold">Our Partner</h2>
      </div>
      <p className="text-gray-500 mb-8">
        Explore our partner all are world class{" "}
      </p>
      <div className="gap-2 h-auto items-center -z-10 p-2">
        <Marquee pauseOnHover={true} speed={80} className="space-x-0">
          {partners.map((partner) => {
            return (
              <img
                key={partner._id}
                className="h-16 ml-24"
                src={partner.photo}
                alt=""
              />
            );
          })}
        </Marquee>
        <Marquee
          pauseOnHover={true}
          direction="right"
          speed={80}
          className="space-x-0 mt-12"
        >
          {partners.map((partner) => {
            return (
              <img
                key={partner._id}
                className="h-16 ml-24"
                src={partner.photo}
                alt=""
              />
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}
