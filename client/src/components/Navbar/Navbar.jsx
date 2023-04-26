import React, { useState } from "react";
import { Link } from "react-router-dom";

// constants
import { navLinks } from "../../constants";

// assets
import { logoColor, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-around items-center w-full p-4 xs:py-[30px] md:py-[50px] fixed top-0 bg-primary z-10">
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
        <img src={logoColor} alt="logo" className="xs:w-24 md:w-[176px]" />
      </Link>

      {/* Categories */}
      <ul className="list-none hidden flex-row gap-10 md:flex md:mx-4 ">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={
              "md:text-[14px] xl:text-[18px] text-color_midgray hover:text-color_darkgray font-medium cursor-pointer flex items-center"
            }
            onClick={() => setActive(link.title)}
          >
            <span className="dot md:hidden lg:inline-block"></span>
            <Link className="mx-2" to={`/${link.id}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Bar */}
      <div
        className="
        md:hidden flex flex-1 justify-end items-center mx-3
        "
      >
        <img
          src={toggle ? close : menu}
          alt="navlist-menu"
          className="w-[35px] h-[35xp] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        {/* Menu container */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-4 absolute top-10 right-0  my-2 min-w[140px] z-10 rounded-xl  `}
        >
          {/* Nav List */}
          <ul className="list-none flex justify-end items-center flex-col gap-3 bg-secondary p-4 px-8 rounded-md">
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
            {/* ------------*/}
            {/* ------------*/}
            {/*  Guest Navbar on Mobile Navbar 
         
            <div className="flex justify-center items-center flex-col">
              <button className="mt-3  text-color_orange border-b-2">
                LOG IN
              </button>
              <p className="text-color_darkgray font-bold p-1">or</p>
              <button className="text-color_green font-bold border-b-2">
                CREATE ACCOUNT
              </button>
            </div>
            */}

            {/* ------------*/}
            {/* ------------*/}
            {/* User Navbar */}
            {/* ------------ */}
            {/* ------------ */}
            <div className="uppercase">
              <ul className="xs:inline-block md:flex items-center gap-4">
                <li className="mb-2 mt-4">
                  <Link
                    to="/my-recipes"
                    className="border-bottom pb-0.4 font-bold text-color_green"
                  >
                    my recipes
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/user-profile"
                    className="border-bottom pb-0.4 font-bold text-color_orange"
                  >
                    my profile
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/logout"
                    className="border-bottom pb-0.4 font-bold text-color_midgray"
                  >
                    log out
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>

      {/* ------------*/}
      {/* ------------*/}
      {/* User Navbar or Guest Navbar on Desktop, based on login */}
      {/* ------------*/}
      {/* ------------*/}
      <div className="xs:hidden md:flex ">
        {/* ------------*/}
        {/* ------------*/}
        {/* Guest Navbar         
        <div className="flex gap-2 items-center font-medium">
          <button className="w-[107px] h-[44px] p-2 line-border rounded-lg text-color_darkgray">
            LOG IN
          </button>
          <p className="text-color_orange font-bold mx-2">or</p>
          <button className="w-[178px] h-[44px] p-2 rounded-lg bg-color_green text-white">
            CREATE ACCOUNT
          </button>
        </div>
        */}
        {/* ------------*/}
        {/* ------------*/}
        {/* User Navbar */}

        <div className="uppercase">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                to="/my-recipes"
                className="border-bottom pb-0.2 font-bold text-color_green"
              >
                my recipes
              </Link>
            </li>
            <span className="black_dot md:hidden lg:inline-block"></span>
            <li>
              <Link
                to="/user-profile"
                className="border-bottom pb-0.2 font-bold text-color_orange"
              >
                my profile
              </Link>
            </li>
            <span className="black_dot md:hidden lg:inline-block"></span>
            <li>
              <Link
                to="/logout"
                className="border-bottom pb-0.2 font-bold text-color_midgray"
              >
                log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
