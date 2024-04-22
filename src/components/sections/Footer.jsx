import React from "react";

export default function Footer() {
  return (
    <div>
      <p className="!z-[60] absolute bottom-3 w-[100vw] text-center opacity-80">
        Made by{" "}
        <a
          className="!z-[60] underline cursor-pointer"
          href="https://sacha-marits.be"
          target="_blank"
        >
          Sacha Marits
        </a>
      </p>
      <img className="wave absolute bottom-0 w-screen -z-20" src="wave.svg" />
    </div>
  );
}
