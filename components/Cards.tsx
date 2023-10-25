import React from "react";
const Headphones = [
  {
    pic: "/details.jpg",
    text: "SoundCore 10+",
    link: "#",
  },
  {
    pic: "/details2.jpg",
    text: "SoundCore 20+",
    link: "#",
  },
];

const Cards = () => {
  return (
    <section className="container flex items-start justify-between gap-8 md:flex-row flex-col py-20">
      {Headphones.map((item, index) => (
        <div
          key={index}
          className="flex-1 aspect-square rounded-xl relative bg-white/10 shadow"
        >
          {/* button */}
          <button className="absolute top-4 right-4 rounded-full w-12 hover:scale-105 transition aspect-square bg-black hover:black-yellow-400">
            <i className="transition -rotate-45 fa-solid fa-arrow-right hover:rotate-0 transition"></i>
          </button>
          <img
            src={item.pic}
            alt={item.text}
            className="w-full aspect-square object-center object-cover"
          />
          <h1 className="absolute bottom-4 left-0 text-yellow-400 font-bold md:text-4xl text-2xl bg-black rounded-tr-xl  rounded-br-xl p-3">
            {item.text}
          </h1>
        </div>
      ))}
    </section>
  );
};

export default Cards;
