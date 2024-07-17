import React from "react";
import { nav_icons, navData } from "../../data/nav-data";
import { CgProfile } from "react-icons/cg";

const NavItems = () => {
  return (
    <section className="bg-primary-brown p-4 font-poppins">
      <div className="w-11/12 mx-auto flex flex-row justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Parampra Store</h1>
        </div>

        {/* social links */}
        <div className="flex items-center justify-around gap-5">
          {/* Nav-tabs */}
          <div>
            <ol className="flex gap-4 text-sm tracking-tight font-medium">
              {navData.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ol>
          </div>

          {/* icons */}
          <div>
            <ol className="flex gap-4">
              {nav_icons.map((item) => (
                <li
                  key={item.id}
                  className="text-lg rounded-full p-2 bg-[#F5EDE8]"
                >
                  <item.icon />
                </li>
              ))}
            </ol>
          </div>

          {/* Profile icons */}
          <div>
          <i className="text-xl "> <CgProfile /></i>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavItems;
