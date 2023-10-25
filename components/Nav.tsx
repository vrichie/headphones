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
      href: "/#faq",
    },
  ];

  return (
    <nav className="container flex items-center justify-between py-5" id="top">
      <div className="w-fit flex items-center gap-3" id="logo">
        <div className="w-20 aspect-square bg-yellow-400 rounded-full flex items-center justify-center">
          <img src="/favicon.ico" alt="" className="w-18" />
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
      <div className="w-fit" id="icons">
        <span className="aspect-square p-3 bg-red-400 rounded-full ">HR</span>
      </div>
    </nav>
  );
};

export default Nav;
