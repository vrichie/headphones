import React from "react";
import Button from "./common/Buttons";

const HeroText = () => {
  return (
    <section className="container flex md:flex-row flex-col items-center justify-between py-20">
      <div id="big-text" className="">
        <h1
          className="md:text-8xl text-4xl text-left font-bold "
          data-aos="fade-up"
        >
          <b className="text-red-400">HEAVEN</b> ON <br />
          AUDIO <b className="text-yellow-400"> SOUND</b>
        </h1>
      </div>
      <div id="small-text" className="flex flex-col items-end gap-4">
        <img
          src="/waves.png"
          alt=""
          className="w-fit aspect-video"
          data-aos="fade-in"
        />
        <p className="w-[300px] text-right text-xs" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, velit
          quae consequatur est tenetur molestias debitis reiciendis. Voluptate,
          aut pariatur?
        </p>
        <Button text="Get Started" />
      </div>
    </section>
  );
};

export default HeroText;
