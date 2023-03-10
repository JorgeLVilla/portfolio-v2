import React from "react";
import { BsKeyboard } from "react-icons/bs";

const Home = () => {
  return (
    <main className="">
      <section className="sm:hidden px-4 py-4">
        <div className="text-right font py-2 text-6xl">jorge</div>
        {/* <div className="mt-[-10px] mb-5 h-[1.5px] w-11/12 bg-black mx-auto"></div> */}
        <div className="text-right font py-2 text-6xl">villalobos</div>
        {/* <div className="mt-[-10px] mb-5 h-[1.5px] w-11/12 bg-black mx-auto"></div> */}
        <div className="">
          <BsKeyboard className="text-9xl mx-auto my-3" />
        </div>
        <div className="py-2 text-6xl">front end developer</div>
      </section>

      {/*--------Desktop Version----*/}
      <section className="hidden sm:flex pt-96">
        <div className="text-10xl w-full leading-none">
          <p className="text-right px-24">frontend</p>
          <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
          <div className="flex justify-between px-24">
            <p>jorge</p>
            <p>developer</p>
          </div>
          <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
          <p className="px-24">villalobos</p>
          <div className=" h-[1.5px] w-11/12 bg-black mx-auto"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
