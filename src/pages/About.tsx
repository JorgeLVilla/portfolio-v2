import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";

const About = () => {
  const [activeTooltip, setActiveTooltip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jorgewolftown@gmail.com");
    setActiveTooltip(true);
    setTimeout(() => {
      setActiveTooltip(false);
    }, 2000);
  };

  return (
    <main className="">
      <Navbar />
      <section>
        <div className="md:py-10 mb-10">
          <div className="px-10 pt-10 text-xl md:text-3xl font-thin md:w-3/6 md:mx-auto">
            <p className="pb-10">
              I am a Front-End Developer living in San Diego, California. I am
              very passionate about everything that I do, and love to create
              things with other people.
            </p>
            <p className="pb-10">
              In my free time I am usually playing my guitar along to some old
              blues songs, or playing video games. I also enjoy training in
              JiuJitsu and learning new technologies.
            </p>
            <p className="pb-10">
              I am always excited to work on awesome projects, and push the
              boundaries of web and app development.
            </p>
          </div>
        </div>
        <div className="h-auto flex justify-around px-8 md:font-thin md:justify-center">
          <Link
            href="Contact"
            className="pointer bg-black text-primary rounded-full h-32 sm:h-60 w-32 sm:w-60 md:-mx-5 md:text-3xl border border-black flex justify-center items-center"
          >
            <p>get in touch</p>
          </Link>
          <Link
            href="Work"
            className="rounded-full h-32 sm:h-60 w-32 sm:w-60 md:-mx-5 md:text-3xl border border-black flex justify-center items-center"
          >
            <p>my work</p>
          </Link>
        </div>
        <div className="py-10 sm:py-18 md:flex md:justify-around md:px-52">
          <div className="text-center md:text-left uppercase font-thin text-xl md:text-3xl md:flex md:flex-col md:justify-between md:w-3/6">
            <h1 className="">
              interested in<br></br>working together?
            </h1>
            <h1 className="">send me a message</h1>
          </div>
          <div className="uppercase font-thin text-xl px-4 pt-5 sm:pt-0 flex flex-col gap-1 md:items-end md:gap-1 md:text-right items-center md:text-3xl md:w-3/6">
            <Link href="https://github.com/JorgeLVilla">github</Link>
            <Link href="https://www.behance.net/jorgevillalobos14">
              behance
            </Link>
            <Link href="https://www.linkedin.com/in/jorge-villalobos-04b47b234/">
              linkedin
            </Link>
            <Link href="https://dribbble.com/Jlvilla">facebook</Link>
          </div>
        </div>
        <div
          onClick={handleCopy}
          className={`text-5xl pb-8 hover:scale-105 relative cursor-pointer transition ease-in duration-400 after:content-['copied'] after:absolute after:text-[30px]
          after:text-primary after:top-14 after:right-48 after:bg-black after:px-1 after:rounded ${
            activeTooltip
              ? "after:opacity-1"
              : "after:opacity-0 after:duration-200 after:ease-in-out"
          }`}
        >
          <p className="sm:px-24 sm:pt-8 -mb-1 pl-10 md:text-10xl sm:-mb-4 leading-none">
            jorgewolftown
          </p>
          <div className="h-[1.5px] w-11/12 bg-black  mx-auto"></div>
          <p className="sm:px-20 sm:pt-8 -mb-1 pl-7 md:text-10xl sm:-mb-4 leading-none">
            @gmail.com
          </p>
          <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div>
        </div>
      </section>
    </main>
  );
};

export default About;
