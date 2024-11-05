import React from "react";
import { useOpening } from "../../contexts/useOpening";

export default function SelectSet() {
  const { set, sets, setSet, isOpening } = useOpening();

  return (
    <select
      className="p-2 mt-4 ml-0 rounded-lg relative !z-[60]"
      onChange={(e) => setSet(+e.target.value)}
      defaultValue={set}
      disabled={isOpening}
      title={isOpening && "You can't change set while opening"}
    >
      {sets.map((d) => (
        <option value={d.id} key={d.id}>
          {d.name}
        </option>
      ))}
    </select>
  );
}
