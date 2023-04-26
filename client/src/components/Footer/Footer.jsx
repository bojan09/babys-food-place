import React, { useState } from "react";
import { Link } from "react-router-dom";

// constants
import { navLinks } from "../../constants";

// assets
import { logoWhite } from "../../assets";

const Footer = () => {
  const [active, setActive] = useState("");
  return (
    <div className="absolute z-20 top-[90rem] bg-color_darkgray w-full flex justify-evenly items-center h-[180px]">
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
        <img src={logoWhite} alt="logo" className="xs:w-24 md:w-[112px]" />
      </Link>

      {/* Categories */}
      <ul className="list-none hidden flex-row gap-12 md:flex md:mx-4 ">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={
              "md:text-[13px] xl:text-[15px] text-color_lightgray hover:text-color_midgray font-medium cursor-pointer"
            }
            onClick={() => setActive(link.title)}
          >
            <span className="gray_dot md:hidden lg:inline-block"></span>
            <Link className="mx-2" to={`/${link.id}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Categories */}
      <p className="text-color_lightgray">
        Baby’s Food Place <br /> copyright © 2021
      </p>
    </div>
  );
};

export default Footer;
