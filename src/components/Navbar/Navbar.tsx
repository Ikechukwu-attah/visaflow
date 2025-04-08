import { FC, useState } from "react";
import { navbarItem } from "./data";
import logo from "/assets/logo.webp";
import MobileMenu from "./MobileMenu";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Notifications from "../Notification/Notifications";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const mainNavbarItem = navbarItem.filter(
    (item) => item.item !== "Login" && item.item !== "Sign Up"
  );

  const authNavbarItem = navbarItem.filter(
    (item) => item.item === "Login" || item.item === "Sign Up"
  );

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full bg-white shadow-md hidden p-4 md:px-16 md:flex justify-between items-center">
        {/* ✅ Use RouterLink for Home */}
        <RouterLink to="/">
          <img
            src={logo}
            alt="logo"
            width="40px"
            height="40px"
            className="rounded-full cursor-pointer"
          />
        </RouterLink>

        {/* ✅ Use ScrollLink for sections if on Home page */}
        <ul className="flex justify-between gap-4 text-lg space-x-8">
          {mainNavbarItem.map((item) => (
            <li key={item.id}>
              {location.pathname === "/" ? (
                <ScrollLink
                  to={item.url}
                  smooth={true}
                  duration={500}
                  offset={-80} // Adjust for fixed navbar
                  className="cursor-pointer hover:text-blue-600"
                >
                  {item.item}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={`/#${item.url}`}
                  className="hover:text-blue-600"
                >
                  {item.item}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>

        {/* Authentication Links (Always RouterLink) */}
        <ul className="flex justify-between gap-4 text-lg">
          {authNavbarItem.map((item) => (
            <li key={item.id}>
              <RouterLink to={item.url} className="hover:text-blue-600">
                {item.item}
              </RouterLink>
            </li>
          ))}
        </ul>
        <Notifications />
      </nav>

      {/* Mobile Navbar */}
      <div className="w-full bg-white shadow-md p-4 flex justify-between relative z-100 items-center md:hidden">
        <RouterLink to="/">
          <img
            src={logo}
            alt="logo"
            width="40px"
            height="40px"
            className="rounded-full cursor-pointer"
          />
        </RouterLink>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl absolute top-4 right-4 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && <MobileMenu isOpen={menuOpen} isClose={setMenuOpen} />}
    </>
  );
};

export default Navbar;
