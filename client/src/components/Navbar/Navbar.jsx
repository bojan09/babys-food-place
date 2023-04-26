import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import GuestNavbar from "./GuestNavbar/GuestNavbar";

// constants
import { navLinks } from "../../constants";

// assets
import { logoColor, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" w-full p-4 fixed top-5 flex justify-around items-center bg-primary">
      {/* Logo */}
      <Link
        to="/"
        onClick={() => {
          setActive("");
          {
            window.scrollTo(0, 0);
          }
        }}
      >
        <img src={logoColor} alt="logo" />
      </Link>

      {/* Categories */}
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={
              "text-[18px] text-color_midgray hover:text-color_darkgray font-medium cursor-pointer"
            }
            onClick={() => setActive(link.title)}
          >
            <span className="dot"></span>
            <Link className="mx-2" to={`/${link.id}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Bar */}
      <div
        className="
        sm:hidden flex flex-1 justify-end items-center mx-3
        "
      >
        <img
          src={toggle ? close : menu}
          alt="navlist-menu"
          className="w-[28px] h-[28xp] object-contain cursor-pointer bg-black"
          onClick={() => setToggle(!toggle)}
        />
        {/* Menu container */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
        >
          {/* Nav List */}
          <ul className="list-none flex justify-end items-center flex-col gap-3 bg-primary p-4 rounded-md">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-color_midgray"
                    : "text-color_darkgray"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}

            {/*  Guest Navbar */}
            <div className="flex justify-center items-center flex-col">
              <button className="mt-3  text-color_orange border-b-2">
                LOG IN
              </button>
              <p className="text-color_darkgray font-bold p-1">or</p>
              <button className="text-color_green font-bold border-b-2">
                CREATE ACCOUNT
              </button>
            </div>
          </ul>
        </div>
      </div>

      {/* User Navbar or Guest Navbar, based on login */}
      <div className="sm:hidden md:flex">
        {/* Guest Navbar */}
        <div className="flex gap-2 items-center font-medium">
          <button className="w-[107px] h-[44px] p-2 line-border rounded-lg text-color_darkgray">
            LOG IN
          </button>
          <p className="text-color_orange font-bold">or</p>
          <button className="w-[178px] h-[44px] p-2 rounded-lg bg-color_green text-white">
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
