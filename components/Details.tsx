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
    <div className="container flex md:flex-row flex-col items-center justify-between gap-10">
      <div
        id="text"
        className="flex-1 flex flex-col  items-start gap-5 TEXT-LEFT"
      >
        <h1 className="text-4xl">
          DREAM WIRELESS <br />
          <b className="text-yellow-400">HEADPHONES</b>
        </h1>
        <p className="text-white/50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          molestias nam nisi commodi quam porro eius illo consequuntur quis
          dicta?
        </p>
        <ButtonOutline text="Get Started" />
      </div>
      <div id="image" className="h-[50vh] flex-1 flex bg-red-300"></div>
    </div>
  );
};
const Fusion = () => {
  return (
    <div className="container flex md:flex-row flex-col items-center justify-between gap-10">
      <div id="image" className="h-[50vh] flex-1 bg-red-300"></div>{" "}
      <div
        id="text"
        className="flex-1 flex flex-col  items-start gap-5 TEXT-LEFT"
      >
        <h1 className="text-4xl">
          <b className="text-yellow-400">FUSIONBASS</b>
          <br /> IN-EAR EARBUDS
        </h1>
        <p className="text-white/50">
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
