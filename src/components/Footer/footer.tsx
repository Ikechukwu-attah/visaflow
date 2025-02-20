import React, { Fragment } from "react";
import logo from "/assets/logo.webp";
import { footerData } from "./data";
import { Link } from "react-router-dom";

const Footer = () => {
  const filteredLegalItems = footerData.filter(
    (item) => item.title === "Legal"
  );
  const filteredItem = footerData.filter((item) => item.title !== "Legal");

  return (
    <Fragment>
      {/* ✅ Main Footer */}
      <footer className="w-full p-6 md:px-16 bg-[#0A192F] py-24 text-white flex flex-col md:flex-row gap-8 md:gap-16">
        {/* ✅ Company Info Section */}
        <div className="flex flex-col gap-3 md:w-1/4">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              width="40"
              height="40"
              className="rounded-full"
            />
            <h1 className="text-3xl font-extrabold">VisaFlow</h1>
          </div>
          <p className="text-sm text-gray-400">
            VisFlow is dedicated to providing seamless immigration assistance
            through AI-powered solutions, ensuring a smooth journey for our
            users.
          </p>
        </div>

        {/* ✅ Footer Menus */}
        <div className="flex-1">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredItem.map((data) => (
              <li key={data.id} className="flex flex-col">
                {/* ✅ Title in Bold */}
                <span className="font-bold text-lg mb-2">{data.title}</span>

                {/* ✅ Child Links */}
                <ul className="space-y-2">
                  {data.footerLinks.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.url}
                        className="text-gray-400 hover:text-blue-300 transition"
                      >
                        {item.item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <div className="w-full border-t border-gray-400 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-4 text-gray-400 text-sm">
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:flex gap-4 text-xs">
          {filteredLegalItems.map((item) =>
            item.footerLinks.map((data) => (
              <li key={data.id}>
                <Link to={data.url} className="hover:text-blue-300 transition">
                  {data.item}
                </Link>
              </li>
            ))
          )}
        </ul>

        {/* ✅ Copyright */}
        <p className="text-[10px] md:text-xs">
          © 2025 VisFlow. All rights reserved.
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
