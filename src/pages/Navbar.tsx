import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";
import { NAV_LINKS } from "@/assets/data/NavData";
import { INFO } from "@/assets/data/info";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="pt-20 pb-5">
      {/*------Desktop Navbar Section----------*/}
      <section className="flex justify-around sm:justify-between sm:px-32">
        <div
          className="text-2xl
          "
        >
          <Link href={"/"}>portfolio 2023</Link>
        </div>
        <div className="text-4xl sm:hidden" onClick={handleNavbar}>
          <RiMenu5Fill />
        </div>
        <ul className="hidden sm:flex text-xl">
          {NAV_LINKS.map((item, index) => (
            <li className="px-5" key={index}>
              <Link href={`${item.path}`}>{item.display}</Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-16 h-[1.5px] w-11/12 bg-black mx-auto"></div>
      {/*------Open Mobile Navbar----------*/}
      <section
        className={`${
          !navbarOpen
            ? "hidden"
            : "block py-10 absolute inset-0 h-screen bg-black text-off-white"
        }`}
      >
        <div
          className="pt-10 pr-12 text-4xl flex justify-end"
          onClick={handleNavbar}
        >
          <RiCloseFill />
        </div>
        <ul className="pt-12">
          {NAV_LINKS.map((item, index) => (
            <li className="text-5xl py-4 px-5 uppercase" key={index}>
              <Link href={`${item.path}`}>{item.display}</Link>
            </li>
          ))}
        </ul>
        <ul className="py-10 px-5">
          <li className="py-3">{INFO.email}</li>
          <li className="py-2 text-2xl">{INFO.job}</li>
          <li className="py-2">{INFO.location}</li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
