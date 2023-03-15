import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const heroTopVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.25,
    },
  },
};
const heroBotVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.25,
    },
  },
};

// const lineVariant = {

// };
const Home = () => {
  return (
    <main className="h-screen">
      <Navbar />
      {/*--------Mobile Version----*/}
      <div className="sm:hidden flex flex-col justify-between h-4/6">
        <motion.div
          variants={heroTopVariant}
          initial="hidden"
          animate="visible"
          className="text-right font py-2 text-6xl px-4"
        >
          Jorge Villalobos
        </motion.div>
        <div className="text-center flex items-center">
          <Link href="Contact" className="">
            <button className="text-lg uppercase p-2 bg-black text-primary">
              contact me
            </button>
          </Link>
          <motion.div
            initial={{ scale: "0", transformOrigin: "left" }}
            animate={{ scale: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="h-[1.5px] w-3/6 bg-black mx-auto"
          ></motion.div>
        </div>
        <motion.div
          variants={heroBotVariant}
          initial="hidden"
          animate="visible"
          className="py-2 text-6xl px-4"
        >
          Front End Developer
        </motion.div>
      </div>

      {/*--------Desktop Version----*/}
      <section className="h-4/5 py-12 hidden sm:flex sm:items-end sm:justify-end">
        <div className="text-10xl w-full leading-none">
          <p className="text-right px-24 sm:-mb-4">frontend</p>
          <motion.div
            initial={{ scale: "0", transformOrigin: "left" }}
            animate={{ scale: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="h-[1.5px] w-11/12 bg-black mx-auto"
          ></motion.div>
          <div className="flex justify-between px-24 sm:-mb-4">
            <p>jorge</p>
            <p>developer</p>
          </div>
          <motion.div
            initial={{ scaleX: "0", transformOrigin: "left" }}
            animate={{ scaleX: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="h-[1.5px] w-11/12 bg-black mx-auto"
          ></motion.div>
          <p className="px-24 sm:-mb-4">villalobos</p>
          <motion.div
            initial={{ scale: "0", transformOrigin: "left" }}
            animate={{ scale: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className=" h-[1.5px] w-11/12 bg-black mx-auto"
          ></motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
