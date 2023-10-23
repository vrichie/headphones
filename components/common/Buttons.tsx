import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-red-400 px-6 py-3 rounded-xl transition hover:bg-red-500">
      {text}
    </button>
  );
};
export const ButtonOutline = ({ text }: { text: string }) => {
  return (
    <button className="border-2 border-red-400 px-6 py-3 rounded-xl transition text-red-400 hover:text-red-500">
      {text}
    </button>
  );
};
export const Button2 = ({ text }: { text: string }) => {
  return (
    <button className="border-2 border-yellow-400 px-6 py-3 rounded-xl transition text-yellow-400 hover:text-yellow-500">
      {text}
    </button>
  );
};
export default Button;
