import Link from "next/link";
import React from "react";
type links = {
  name: "Home" | "ABOUT" | "COLLECTIONS" | "FAQ";
  href: string;
};
const Footer = () => {
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
  const social = [
    {
      icon: "fa-linkedin",
      link: "#",
    },
    {
      icon: "fa-github",
      link: "#",
    },
    {
      icon: "fa-twitter",
      link: "#",
    },
  ];
  const date = new Date().getFullYear();
  return (
    <footer className="container flex flex-col gap-4 items-center">
      <div
        className="w-full flex md:flex-row flex-col items-center justify-between py-5 gap-6"
        id="bottom"
      >
        <div className="w-fit flex items-center gap-3" id="logo">
          <div className="w-20 aspect-square bg-yellow-400 rounded-full flex items-center justify-center">
            <img src="/favicon.ico" alt="" className="w-18" />
          </div>
          <span className="flex flex-col gap-1 items-start">
            <h2 className="font-bold text-red-400">SPECIAL</h2>
            <h2 className="font-bold">SOUNDS</h2>
          </span>
        </div>
        <div className="w-fit flex items-center gap-6" id="links">
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
        <div
          className="w-fit text-right flex items-end gap-2 flex-col"
          id="icons"
        >
          <p>Hello@world.co</p>
          <h3>000-111-222-333</h3>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-white/50 py-5 flex items-center justify-between">
        <span className="flex items-center gap-3 justify-between">
          {social.map((item, index) => (
            <Link
              href={item.link}
              className="p-2 text-white rounded-full aspect-square bg-white/10 flex items-center justify-center"
              key={index}
            >
              <i className={`fa-brands ${item.icon}`}></i>
            </Link>
          ))}
        </span>
        <p className="font-bold"> {date} Alrighty.</p>
      </div>
    </footer>
  );
};

export default Footer;
