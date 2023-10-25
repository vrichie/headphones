import Link from "next/link";
import React from "react";
type links = {
  name: "Home" | "ABOUT" | "COLLECTIONS" | "FAQ";
  href: string;
};
const Nav = () => {
  const [active, setActive] = React.useState<number>(0);
  const changeActive = (i: number) => {
    setActive(i);
  };
  const navLinks: links[] = [
    {
      name: "Home",
      href: "/#top",
    },
    {
      name: "ABOUT",
      href: "/#about",
    },
    {
      name: "COLLECTIONS",
      href: "/#collections",
    },
    {
      name: "FAQ",
      href: "/#faqs",
    },
  ];

  return (
    <nav className="container flex items-center justify-between py-5" id="top">
      <div className="w-fit flex items-center gap-3" id="logo">
        <div className="md:w-16 w-14 aspect-square bg-yellow-400 rounded-full flex items-center justify-center">
          <img src="/logo.png" alt="" className="md:w-10 w-8" />
        </div>
        <span className="flex flex-col gap-1 items-start">
          <h2 className="font-bold text-red-400">SPECIAL</h2>
          <h2 className="font-bold">SOUNDS</h2>
        </span>
      </div>
      <div className="w-fit md:flex hidden items-center gap-6" id="links">
        {navLinks.map((item, index: number) => (
          <Link href={item.href} key={index}>
            <span
              className={`${
                active === index ? "text-white" : "text-white/50"
              } transition`}
              onClick={() => changeActive(index)}
            >
              {" "}
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="w-fit flex items-center gap-4" id="icons">
        <span className="aspect-square p-3 border-[1px] border-white/50 rounded-full text-white flex items-center justify-center">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>

        <span className="aspect-square p-3 border-[1px] border-white/50 rounded-full text-white flex items-center justify-center">
          <i className="fa-regular fa-heart"></i>
        </span>

        <span className="aspect-square p-3 bg-red-400 rounded-full text-white flex items-center justify-center">
          <i className="fa-regular fa-cart-plus"></i>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
