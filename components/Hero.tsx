import React from "react";
import Button, { Button2 } from "./common/Buttons";

const Hero = () => {
  return (
    <section className="container  flex md:flex-row flex-col gap-4 items-center py-10">
      <div className="flex-1 md:pr-4 h-full flex flex-col items-start gap-12 justify-between">
        <img
          src="/top.jpg"
          alt=""
          className="w-full aspect-square object-cover object-center border-b-[1px] border-white/50 pb-4"
        />
        <div className="flex flex-col items-start gap-6 ">
          <span className="w-fit flex items-center gap-4">
            <div className="w-16 aspect-square  flex items-center justify-center text-2xl rounded-full border-white/50 border-2">
              <i className="fa-brands fa-android text-white"></i>
            </div>
            <div className="w-16 aspect-square flex items-center justify-center text-2xl rounded-full border-white/50 border-2">
              <i className="fa-brands fa-apple  text-white"></i>
            </div>
          </span>
          <h2 className="md:text-3xl text-xl">Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint
            deserunt ullam voluptas delectus qui fuga iusto labore repellendus
            dolore velit quisquam ex ipsum officiis debitis, quas tempora quo
            nihil.
          </p>
        </div>
      </div>
      <div className="md:w-[40%] h-full  w-full rounded-md overflow-hidden ">
        <img
          src="/main.jpg"
          alt=""
          className="w-full md:h-[100%] object-center"
        />{" "}
      </div>
      <div className="flex-1 pl-4 flex h-full justify-between flex-col items-start gap-8">
        <h2 className="md:text-4xl text-2xl">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <div className="w-full flex flex-col items-start gap-3">
          <span className="w-full py-2 border-b-[1px] border-white/50 flex items-center justify-between">
            <b>Weight</b>
            <p>217 g</p>
          </span>
          <span className="w-full py-2 border-b-[1px] border-white/50 flex items-center justify-between">
            <b>Battery Life</b>
            <p>Upto 40 hrs</p>
          </span>
          <span className="w-full py-2 border-b-[1px] border-white/50 flex items-center justify-between">
            <b>Water Resistance</b>
            <p>IPX64</p>
          </span>
        </div>
        <div className="w-full flex flex-col items-start gap-8 pt-4">
          <div
            id="color"
            className="w-full border-[1px] border-white/50 p-4 rounded-full flex items-center justify-between"
          >
            <h3>Color Option </h3>
            <div className="flex gap-2 w-fit items-center justify-between">
              <div className="bg-white border-b-[1px] border-white/50 p-2 w-8 aspect-square rounded-full"></div>
              <div className="bg-yellow-400 border-b-[1px] border-white/50 p-2 w-8 aspect-square rounded-full"></div>
            </div>
          </div>
          <div
            id="card"
            className="w-full aspect-video rounded-xl overflow-hidden mt-4"
          >
            <img
              src="/top.jpg"
              alt=""
              className="w-full aspect-video object-center object-cover"
            />
          </div>
          <div
            id="buttons"
            className="w-full flex items-center justify-between pt-4"
          >
            <Button2 text="$ 250" />
            <Button text="Get In Touch" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
