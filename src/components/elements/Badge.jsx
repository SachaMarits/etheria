import React from "react";

export default function Badge({ color, children }) {
  const colors = [
    {
      color: "Legendary",
      bg: "bg-yellow-900",
      text: "text-yellow-300",
    },
    {
      color: "Epic",
      bg: "bg-purple-900",
      text: "text-purple-300",
    },
    {
      color: "Rare",
      bg: "bg-blue-900",
      text: "text-blue-300",
    },
    {
      color: "Common",
      bg: "bg-gray-700",
      text: " text-gray-300",
    },
  ];

  const style = colors.find((c) => c.color === color);

  return (
    <span
      className={`${style.bg} ${style.text} text-xs font-medium px-2.5 py-0.5 rounded !h-[17px]`}
    >
      {children}
    </span>
  );
}
