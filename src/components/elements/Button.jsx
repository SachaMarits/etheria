import classNames from "classnames";
import React from "react";

export default function Button({ children, onClick, className, disabled }) {
  return (
    <div className={classNames("inline-flex group", className)}>
      <div
        className={classNames(
          "absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg animate-tilt",
          !disabled
            ? "group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
            : "opacity-30"
        )}
      ></div>
      <button
        className={classNames(
          "relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
          !disabled ? "pointer-cursor" : "opacity-70"
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
