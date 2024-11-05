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
      {/* <img className="wave absolute bottom-0 w-screen -z-20" src="wave.svg" /> */}

      <svg
        className="wave absolute bottom-0 w-screen -z-20"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 543L37.5 544.3C75 545.7 150 548.3 225 548.2C300 548 375 545 450 529.3C525 513.7 600 485.3 675 471.3C750 457.3 825 457.7 862.5 457.8L900 458L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z"
          fill="url(#gradient)"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
        <defs>
          <linearGradient id="gradient">
            <stop id="wave-g-1" offset="0%" stopColor="#12c2e9" />
            <stop id="wave-g-2" offset="50%" stopColor="#c471ed" />
            <stop id="wave-g-3" offset="100%" stopColor="#f64f59" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
