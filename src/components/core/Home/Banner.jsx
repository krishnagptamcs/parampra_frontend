import React from "react";
import ganesh_ji from "../../../../public/assets/hero-section/Mosque img.png";

const Banner = () => {
  return (
    <>
      <section className="background_hero">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col items-center py-20 font-poppins relative">
            {/* Heading */}
            <h1 className="text-9xl font-bold absolute top-10 text-black/90">
              सनातन धर्म
            </h1>

            {/* Image */}
            <div className="w-3/5 mx-auto z-20">
              <img src={ganesh_ji} className="object-contain " />
            </div>

            <div className="bg-primary-brown p-6 space-y-1 w-9/12 mx-auto absolute rounded-lg -bottom-20">
              {/* Heading */}
              <h1 className="text-3xl font-semibold">Experience the divine...</h1>

              <h2 className="text-xl font-medium">
                Discover and participate in a variety of religious activities,
                festivals, and rituals.
              </h2>

              {/* search input */}
              <div className="w-full">
                <input type="text" className="bg-gray-100 p-2 w-full rounded-md" placeholder="search here....." />
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Banner;
