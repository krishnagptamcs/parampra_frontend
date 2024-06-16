import React from "react";
import { Link } from "react-router-dom";

const tabs = [
  {
    id: 1,
    title: "About",
    path: "/about",
  },
  {
    id: 2,
    title: "Pandit Ji",
    path: "/pandit-ji",
  },
  {
    id: 3,
    title: "Samagri Items",
    path: "/samagri-items",
  },
  {
    id: 4,
    title: "Puja Package's",
    path: "/package",
  },
];

const NavTabs = () => {
  return (
    <nav className="p-2 bg-white/85">
      <div className="w-11/12 mx-auto flex items-center justify-evenly">
        {/* nav list items */}

        {tabs.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className="text-xl font-medium text-orange-800 border-b-[2px] mb-1 border-orange-800"
          >
            <div>{item.title}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavTabs;
