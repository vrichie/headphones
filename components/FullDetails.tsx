import React from "react";

const FullDetails = () => {
  const details = [
    {
      title: "NOISE CANCELLATION",
      subtitle:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus velit provident officia veniam temporibus eos autem dolores rerum laboriosam pariatur, saepe exercitationem est sequi iusto tempore neque deleniti excepturi.",
      image: "/top.jpg",
    },
    {
      title: "BATTERY LONGER LIFE",
      subtitle:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus velit provident officia veniam temporibus eos autem dolores rerum laboriosam pariatur, saepe exercitationem est sequi iusto tempore neque deleniti excepturi.",
      image: "/top.jpg",
    },
    {
      title: "STYLISH DESIGN CASE",
      subtitle:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus velit provident officia veniam temporibus eos autem dolores rerum laboriosam pariatur, saepe exercitationem est sequi iusto tempore neque deleniti excepturi.",
      image: "/top.jpg",
    },
    {
      title: "CUSTOMIZABLE SOUND",
      subtitle:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus velit provident officia veniam temporibus eos autem dolores rerum laboriosam pariatur, saepe exercitationem est sequi iusto tempore neque deleniti excepturi.",
      image: "/top.jpg",
    },
  ];
  return (
    <section className="container py-20 flex gap-10 flex-col">
      {details.map((item, index) => (
        <div
          key={index}
          className="w-full py-10 border-b-[1px] border-white/50 flex gap-10 items-center justify-between transition text-white/70 hover:text-white md:flex-row flex-col"
        >
          <h1 className="md:text-6xl text-3xl flex-1">{item.title}</h1>
          <p className="flex-1">{item.subtitle}</p>
          <img
            src={item.image}
            alt=""
            className="md:w-1/5 w-full  object-cover object-center aspect-square  rounded-xl overflow-hidden"
          />
        </div>
      ))}
    </section>
  );
};

export default FullDetails;
