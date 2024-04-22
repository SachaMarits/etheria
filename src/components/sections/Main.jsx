import React, { useMemo } from "react";
import { PackedCard } from "../elements";
import { getCards, getDropRates } from "../../services/cards.service";
import { useOpening } from "../../contexts/useOpening";

export default function Main() {
  const cards = useMemo(() => getCards(), []);
  const dropRates = useMemo(() => getDropRates(), []);
  const { isOpening, setIsOpening, setBooster, deck, setDeck } = useOpening();

  const generateBooster = () => {
    setIsOpening(true);
    const generatedBooster = [];
    for (let index = 0; index < 5; index++) {
      const rate = +(Math.random() * 100).toFixed(2);
      const category = dropRates.find(
        ({ minRate, maxRate }) => minRate <= rate && maxRate >= rate
      );
      if (category) {
        const cardInsideCategory = cards.filter(
          ({ rarity }) => rarity === category.rarity
        );
        const card =
          cardInsideCategory[
            Math.floor(Math.random() * cardInsideCategory.length)
          ];
        generatedBooster.push(card);
      }
    }
    setBooster(generatedBooster.map((g) => ({ ...g, opened: false })));
  };

  return (
    <main className="w-full h-[87.5vh] overflow-hidden">
      {isOpening ? (
        <PackedCard deck={deck} setDeck={setDeck} />
      ) : (
        <>
          <img
            className={
              "pack absolute top-[50%] left-[50%] h-[55vh] select-none cursor-pointer"
            }
            src="pack.png"
            onClick={generateBooster}
          />
        </>
      )}
    </main>
  );
}
