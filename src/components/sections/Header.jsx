import React from "react";
import Collection from "../elements/Collection";
import SelectSet from "../elements/SelectSet";
import { useOpening } from "../../contexts/useOpening";

export default function Header() {
  const { activeSet } = useOpening();

  return (
    <header className="p-5 flex justify-between h-[12.5vh] max-sm:items-center">
      <div>
        <div className="flex items-center gap-3 ">
          <img className="h-20" src={`${activeSet.folder}/logo.png`} />
          <div>
            <h1 className="text-3xl">Etheria</h1>
            <h2 className="text-xl hidden md:block">
              Your digital looting cards
            </h2>
          </div>
        </div>

        <SelectSet />
      </div>

      <Collection />
    </header>
  );
}
