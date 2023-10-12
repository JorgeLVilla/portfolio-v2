import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const Work = () => {
  return (
    <main className="text-center sm:text-left h-screen">
      <Navbar />
      <section className="text-6xl pt-4 sm:pt-10 pb-12 sm:pb-40 sm:text-10xl leading-none sm:px-24">
        work & <br></br>projects
      </section>
      <section className="text-4xl sm:text-10xl leading-none">
        <p className=" sm:uppercase text-4xl py-2 sm:py-0 sm:text-3xl font-thin sm:px-24 sm:text-right">
          click on a project
        </p>

        <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
        <Link href="https://mkgtaxconsultants.com/" target="_blank">
          <p className="py-2 sm:px-24 sm:pt-8 sm:-mb-4">mkg tax consultants</p>
        </Link>
        <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
        <Link href="https://pokedex-app-3fb51.web.app/" target="_blank">
          <p className="py-2 sm:px-24 sm:pt-8 sm:-mb-4">pocketdex</p>
        </Link>
        <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
        <Link href="https://jorgewolftown.com/" target="_blank">
          <p className="py-2 sm:px-24 sm:pt-8 sm:-mb-4">portfolio v1</p>
        </Link>
        <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
        <Link href="https://www.thegoodthingmedia.com/" target="_blank">
          <p className="py-2 sm:px-24 sm:pt-8 sm:-mb-4">good thing media</p>
        </Link>
        <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
        <Link href="https://reactoads-movie-app-7c45e.web.app/" target="_blank">
          <p className="py-2 sm:px-24 sm:pt-8 sm:-mb-4">reactoads movie</p>
        </Link>
        <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
        <Link
          href="https://drive.google.com/file/d/1DK6yXtt9cUxd_4Jm7bPV4P0joT7FYaMe/view?usp=sharing"
          target="_blank"
        >
          <p className="py-2 sm:px-24 sm:pt-8 sm:-mb-4 sm:text-right">resume</p>
        </Link>
        <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
      </section>
    </main>
  );
};

export default Work;
