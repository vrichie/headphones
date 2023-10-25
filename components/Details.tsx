import React from "react";
import { ButtonOutline } from "./common/Buttons";

const Details = () => {
  return (
    <section className="flex flex-col gap-40">
      <Dream />
      <Fusion />
    </section>
  );
};

const Dream = () => {
  return (
    <div className="container flex md:flex-row flex-col items-center justify-between gap-10 py-20">
      <div
        id="text"
        className="flex-1 flex flex-col  items-start gap-10 TEXT-LEFT"
      >
        <h1 className="md:text-6xl text-3xl " data-aos="fade-up">
          DREAM WIRELESS <br />
          <b className="text-yellow-400">HEADPHONES</b>
        </h1>
        <p className="text-white/50" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          molestias nam nisi commodi quam porro eius illo consequuntur quis
          dicta?
        </p>
        <ButtonOutline text="Get Started" />
      </div>
      <div
        id="image"
        className="flex-1 flex items-center justify-center  rounded-xl overflow-hidden"
      >
        <img
          src="/details.jpg"
          data-aos="fade-left"
          alt=""
          className="md:w-4/5 w-full object-cover object-center aspect-square  rounded-xl overflow-hidden"
        />
      </div>
    </div>
  );
};
const Fusion = () => {
  return (
    <div className="container flex md:flex-row flex-col items-center justify-between gap-10">
      <div
        id="image"
        className=" flex-1 flex items-center justify-center rounded-xl overflow-hidden"
      >
        <img
          src="/details2.jpg"
          data-aos="fade-right"
          alt=""
          className="md:w-4/5 w-full object-cover object-center aspect-square  rounded-xl overflow-hidden"
        />
      </div>
      <div
        id="text"
        className="flex-1 flex flex-col  items-start gap-10 TEXT-LEFT"
      >
        <h1 className="md:text-6xl text-3xl " data-aos="fade-up">
          <b className="text-yellow-400">FUSIONBASS</b>
          <br /> IN-EAR EARBUDS
        </h1>
        <p className="text-white/50" data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          molestias nam nisi commodi quam porro eius illo consequuntur quis
          dicta?
        </p>
        <ButtonOutline text="Get Started" />
      </div>
    </div>
  );
};

export default Details;
