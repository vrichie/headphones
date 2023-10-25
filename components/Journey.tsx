"use client";
import React from "react";
const heads = [
  {
    i: 0,
    name: "Background Story",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi culpa blanditiis at perferendis eveniet sint. Vitae quas incidunt blanditiis nobis ea. Libero, repudiandae fuga eligendi dicta odit temporibus veniam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi culpa blanditiis at perferendis eveniet sint. Vitae quas incidunt blanditiis nobis ea. Libero, repudiandae fuga eligendi dicta odit temporibus veniam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi culpa blanditiis at perferendis eveniet sint. Vitae quas incidunt blanditiis nobis ea. Libero, repudiandae fuga eligendi dicta odit temporibus veniam.",
  },
  {
    i: 1,
    name: "About Our Company",
    body: "About Our Company Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi culpa blanditiis at perferendis eveniet sint. Vitae quas incidunt blanditiis nobis ea. Libero, repudiandae fuga eligendi dicta odit temporibus veniam.",
  },
  {
    i: 2,
    name: "Why Choose Us",
    body: "Why Choose Us Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi culpa blanditiis at perferendis eveniet sint. Vitae quas incidunt blanditiis nobis ea. Libero, repudiandae fuga eligendi dicta odit temporibus veniam.",
  },
];
const Journey = () => {
  const [active, setActive] = React.useState<number>(0);
  const changeActive = (no: number) => {
    setActive(no);
  };

  return (
    <div
      className="w-full bg-gradient-to-b from-gray-700/40 via-gray-900/40 to-gray-950/95 rounded-xl"
      id="about"
    >
      <section className="container py-20 flex flex-col gap-20 ">
        <div className="w-full flex items-end justify-between md:flex-row flex-col rounded-xl overflow-hidden">
          <h1
            className="md:text-4xl font-bold text-2xl text-white"
            data-aos="fade-up"
          >
            Journey Through <br />
            Headphone <br />
            Euohoria
          </h1>
          <img
            src="/4pic.jpg"
            alt="journey"
            data-aos="fade-in"
            className="aspect-video object-cover object-center md:w-3/5 w-full"
          />
        </div>
        <div className="w-full flex md:flex-row flex-col gap-8 items-start md:mt-20 justify-between">
          <div
            className="w-fit flex flex-col gap-4 items-start"
            data-aos="fade-up"
          >
            {/* headers */}
            {heads.map((item, index: number) => (
              <div
                key={index}
                onClick={() => changeActive(item.i)}
                className={`${
                  index === active ? "text-white" : "text-white/50"
                } cursor-pointer flex items-center justify-between md:min-w-[250px] border-b-[1px] py-3 border-white/50`}
              >
                <h3>{item.name}</h3>
                <i
                  className={`transition ${
                    index === active ? "" : "rotate-45"
                  } fa-solid fa-arrow-right`}
                ></i>
              </div>
            ))}
          </div>
          {/* body */}
          <div className="md:w-3/5 w-full ">
            <p className=" transition" data-aos="fade-up">
              {heads[active].body}
            </p>
          </div>
        </div>

        <img
          src="/1.jpg"
          alt="banner"
          data-aos="fade-in"
          className="w-full aspect-video object-cover object-center rounded-xl"
        />
      </section>
    </div>
  );
};

export default Journey;
