import React, { useState, useEffect } from "react";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

// jwt
import decode from "jwt-decode";

// redux
import { useDispatch } from "react-redux";

// constants - naVLinks & RoutePath
import { navLinks, mainPath, LOGOUT } from "../../constants";

// components
import {
  GuestMobileNavbar,
  GuestNavbar,
  UserMobileNavbar,
  UserNavbar,
} from "./";

// assets
import { logoColor, menu, closeIcon } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();

  // user
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const googleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  const localLogout = () => {
    dispatch({ type: LOGOUT });

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) localLogout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className=" w-full flex md:justify-around items-center mx-auto sm:pt-[50px] xs:py-[30px] sticky top-0 left-0 bg-primary z-10 sm:mb-3">
      {/* Logo */}
      <Link
        to={mainPath}
        onClick={() => {
          setActive(""), window.scrollTo(0, 0);
        }}
      >
        <img
          src={logoColor}
          alt="logo"
          className="xs:w-[155px] md:w-[200px] xs:ml-2 md:m-0 p-[1rem]"
        />
      </Link>

      {/* Categories */}
      <ul className="list-none hidden flex-row gap-10 md:flex md:mx-4 ">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={
              "md:text-[14px] xl:text-[18px] text-color_midgray hover:text-color_darkgray font-medium cursor-pointer flex items-center"
            }
            onClick={() => setActive(link.title) || window.scrollTo(0, 0)}
          >
            <span className="dot md:hidden lg:inline-block"></span>
            <Link className="mx-2" to={`/${link.id}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden flex flex-1 justify-end items-center mr-7 ">
        <img
          src={toggle ? closeIcon : menu}
          alt="navlist-menu"
          className="w-[40px] h-[40xp] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        {/* Menu container */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-4 absolute top-10 right-0  my-2 min-w[140px] z-10 rounded-xl  `}
        >
          {/* Nav List - Categories */}
          <ul className="list-none flex justify-end items-center flex-col gap-3 bg-secondary p-4 px-8 mt-5 rounded-md">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => setActive(link.title)}
                className={`${
                  active === link.title
                    ? "text-color_midgray"
                    : "text-color_darkgray"
                } font-poppins font-medium cursor-pointer text-[16px]`}
              >
                <Link
                  onClick={() => setToggle(!toggle) || window.scrollTo(0, 0)}
                  to={`/${link.id}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            {/* -------------------------------------------------------*/}
            {/* ------------ Mobile: Guest & User Navbar ------------- */}
            {/* -------------------------------------------------------*/}

            {!user ? (
              <GuestMobileNavbar toggle={toggle} setToggle={setToggle} />
            ) : (
              <UserMobileNavbar toggle={toggle} setToggle={setToggle} />
            )}
          </ul>
        </div>
      </div>

      {/* -------------------------------------------------------*/}
      {/* ------------ Desktop: Guest & User Navbar ------------ */}
      {/* -------------------------------------------------------*/}
      <div className="xs:hidden md:flex ">
        {!user ? <GuestNavbar /> : <UserNavbar />}
      </div>
    </div>
  );
};

export default Navbar;
