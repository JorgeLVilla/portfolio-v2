import React from "react";
import { BsKeyboard } from "react-icons/bs";

const Home = () => {
  return (
    <main className="">
      <section className="sm:hidden py-14 flex flex-col justify-center gap-36 ">
        <div className="text-right font py-2 text-6xl px-4">
          Jorge Villalobos
        </div>
        {/* <div className="mt-[-10px] mb-5 h-[1.5px] w-11/12 bg-black mx-auto"></div> */}
        {/* <div className="text-right font py-2 text-6xl">villalobos</div> */}
        {/* <div className="mt-[-10px] mb-5 h-[1.5px] w-11/12 bg-black mx-auto"></div> */}
        <button className="rotate-90 absolute top-50 -right-8 z-99">
          <p className="border rotate-180 text-lg uppercase p-2 bg-black text-primary">
            contact me
          </p>
        </button>
        <div className="py-2 text-6xl px-4">Front End Developer</div>
      </section>

      {/*--------Desktop Version----*/}
      <section className="hidden sm:flex pt-60">
        <div className="text-10xl w-full leading-none">
          <p className="text-right px-24 sm:-mb-4">frontend</p>
          <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
          <div className="flex justify-between px-24 sm:-mb-4">
            <p>jorge</p>
            <p>developer</p>
          </div>
          <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
          <p className="px-24 sm:-mb-4">villalobos</p>
          <div className=" h-[1.5px] w-11/12 bg-black mx-auto"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
