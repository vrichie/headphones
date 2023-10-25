import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="bg-red-400 px-4 py-2 rounded-full text-xs transition hover:bg-red-500"
      data-aos="fade-in"
    >
      {text}
    </button>
  );
};
export const ButtonOutline = ({ text }: { text: string }) => {
  return (
    <button
      className="border-2 border-red-400 px-4 py-2 rounded-full text-xs transition text-red-400 hover:text-red-500"
      data-aos="fade-in"
    >
      {text}
    </button>
  );
};
export const Button2 = ({ text }: { text: string }) => {
  return (
    <button
      className="border-2 border-yellow-400 px-4 py-2 rounded-full text-xs transition text-yellow-400 hover:text-yellow-500"
      data-aos="fade-in"
    >
      {text}
    </button>
  );
};
export default Button;
