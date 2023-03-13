import React from "react";
import BlackNav from "./BlackNav";

const Contact = () => {
  return (
    <main className="bg-black sm:h-full h-screen ">
      <div className="absolute top-0 left-0 right-0 z-10 text-primary bg-black">
        <BlackNav />
      </div>
      <section className="text-5xl md:text-10xl leading-none text-center py-24 text-primary">
        let's create<br></br>something<br></br>new together
      </section>
      <section>
        <div className="text-5xl pb-8 text-primary">
          {/* <div className="h-[1.5px] w-11/12 bg-black mx-auto"></div> */}
          <p className="sm:px-24 sm:pt-8 -mb-1 pl-10 md:text-10xl sm:-mb-4 leading-none">
            jorgewolftown
          </p>
          <div className="h-[1.5px] w-11/12 bg-primary  mx-auto"></div>
          <p className="sm:px-20 sm:pt-8 -mb-1 pl-7 md:text-10xl sm:-mb-4 leading-none">
            @gmail.com
          </p>
          <div className="h-[1.5px] w-11/12 bg-primary mx-auto"></div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
