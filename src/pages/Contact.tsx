import React, { useState } from "react";
import BlackNav from "./BlackNav";

const Contact = () => {
  const [activeTooltip, setActiveTooltip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jorgewolftown@gmail.com");
    setActiveTooltip(true);
    setTimeout(() => {
      setActiveTooltip(false);
    }, 2000);
  };

  return (
    <main className="bg-black h-screen sm:h-auto lg:py-20">
      <div className="text-primary bg-black">
        <BlackNav />
      </div>
      <section className="text-5xl md:text-10xl leading-none text-center py-24 text-primary">
        let's create<br></br>something<br></br>new together
      </section>
      <section>
        <div
          onClick={handleCopy}
          className={`z-0 text-5xl pb-8 text-primary hover:scale-105 relative cursor-pointer transition ease-in duration-400 after:content-['copied'] after:absolute after:text-[30px]
          after:text-primary after:-top-8 after:right-48 after:bg-black after:px-1 after:rounded ${
            activeTooltip
              ? "after:opacity-1"
              : "after:opacity-0 after:duration-200 after:ease-in-out"
          }`}
        >
          <p className="sm:px-24 sm:pt-8 -mb-1 pl-10 md:text-10xl sm:-mb-4 leading-none">
            jorgewolftown
          </p>
          <div className="h-[1.5px] w-11/12 bg-primary  mx-auto"></div>
          <p className="sm:px-20 sm:pt-8 -mb-1 pl-7 md:text-10xl sm:-mb-4 leading-none">
            @gmail.com
          </p>
          <div className="h-[1.5px] w-11/12 bg-primary mx-auto mb-10"></div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
