import React, { useState } from "react";
import { Link } from "react-router-dom";

// constants - naVLinks & RoutePath
import { navLinks, mainPath } from "../../constants";

// assets
import { logoWhite } from "../../assets";

const Footer = () => {
  const [active, setActive] = useState("");
  return (
    <div className="bg-color_darkgray w-full flex justify-evenly items-center xs:h-[120px] md:h-[180px] sm:mt-[6rem] xs:mt-[4rem]">
      {/* Logo */}
      <Link
        to={mainPath}
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
      <p className="text-color_lightgray xs:text-[13px] md:text-[14px]">
        Baby’s Food Place <br /> copyright © 2023
      </p>
    </div>
  );
};

export default Footer;
