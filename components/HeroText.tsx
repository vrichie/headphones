import React from "react";
import Button from "./common/Buttons";

const HeroText = () => {
  return (
    <section className="container flex md:flex-row flex-col items-center justify-between py-20 gap-6">
      <div
        id="big-text"
        className="md:w-fit  flex md:items-left items-center mx-auto"
      >
        <h1
          className="md:text-8xl text-6xl text-left font-bold md:text-left text-center"
          data-aos="fade-up"
        >
          <b className="text-red-400">HEAVEN</b> ON <br />
          AUDIO <b className="text-yellow-400"> SOUND</b>
        </h1>
      </div>
      <div
        id="small-text"
        className="md:w-fit w-full flex flex-col md:items-end items-center gap-6"
      >
        <img
          src="/waves.png"
          alt=""
          className="w-fit aspect-video"
          data-aos="fade-in"
        />
        <p className="w-[300px] md:text-right text-center" data-aos="fade-up">
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
