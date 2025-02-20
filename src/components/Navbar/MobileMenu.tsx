import React from "react";
import { navbarItem } from "./data";
import { Link } from "react-router-dom";

interface MobileProps {
  isOpen: boolean;
  isClose: (value: boolean) => void;
}
const MobileMenu = ({ isOpen, isClose }: MobileProps) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-full bg-white shadow-md md:hidden transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } z-50 flex flex-col justify-center items-center`}
    >
      <ul className="gap-4 text-lg flex flex-col ">
        {navbarItem.map((item) => (
          <li
            className="cursor-pointer"
            onClick={() => {
              isClose(false);
              console.log("clicked", isOpen);
            }}
            key={item.id}
          >
            <Link to={item.url}>{item.item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
