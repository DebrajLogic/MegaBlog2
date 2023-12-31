/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

function Button({
  className,
  children,
  type = "button",
  bgColor = "bg-gray-800",
  textColor = "text-white",
  effects = false,
  ...props
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className={`${
        effects
          ? isClicked
            ? "transform scale-105"
            : `${bgColor} hover:bg-white hover:text-gray-800`
          : `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none`
      } ${textColor} ${bgColor} font-medium py-2 px-4 rounded-full border border-white transition duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
