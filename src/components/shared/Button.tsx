import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button
      className="bg-[#00616C] text-white text-lg font-medium
    px-5 py-2 rounded-full hover:scale-105 hover:shadow-lg duration-300
    "
    >
      {text}
    </button>
  );
};

export default Button;
