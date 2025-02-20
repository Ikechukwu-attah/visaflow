import React, { FC, useState } from "react";
import { navbarItem } from "./data";
import logo from "../../assets/logo.webp";
import MobileMenu from "./MobileMenu";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log({ menuOpen });
  const mainNavbarItem = navbarItem.filter(
    (item) => item.item !== "Login" && item.item !== "Sign Up"
  );

  const authNavbarItem = navbarItem.filter(
    (item) => item.item === "Login" || item.item === "Sign Up"
  );
  return (
    <>
      <nav
        className={`w-full bg-white shadow-md hidden p-4 md:px-16 md:flex justify-between items-center `}
      >
        <img
          src={logo}
          alt="logo"
          width={"40px"}
          height={"40px"}
          className="flex justify-center items-center rounded-full"
        />
        <ul className="flex justify-between gap-4 text-xl space-x-8">
          {mainNavbarItem.map((item) => (
            <li key={item.id}>{item.item}</li>
          ))}
        </ul>
        <ul className="flex justify-between gap-4 text-xl">
          {authNavbarItem.map((item) => (
            <li key={item.id}>{item.item}</li>
          ))}
        </ul>
      </nav>

      <div className="w-full bg-white shadow-md p-4 flex justify-between relative z-100 items-center md:hidden">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          width="40px"
          height="40px"
          className="rounded-full"
        />

        {/* Mobile Menu Button (Always Visible on Small Screens) */}
        <button
          className="text-2xl absolute  top-4 right-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && <MobileMenu isOpen={menuOpen} isClose={setMenuOpen} />}
    </>
  );
};

export default Navbar;
