import classNames from "classnames";
import React, { useRef } from "react";
import LootCard from "./LootCard";
import { useOpening } from "../../contexts/useOpening";

export default function Card({ className, img, style, rarity, flipped }) {
  const ref = useRef(null);
  const {
    deck,
    setDeck,
    booster,
    setBooster,
    setFlipped,
    setIsOpening,
    activeSet,
  } = useOpening();

  const handleLocaleStorage = (card) => {
    if (deck) {
      const deckIndex = deck.findIndex(
        ({ number, set }) => number === card.number && set === activeSet.folder
      );
      const modifiedDeck =
        deckIndex > -1
          ? deck.map((d, i) =>
              i === deckIndex ? { ...d, count: d.count + 1 } : d
            )
          : [...deck, { ...card, set: activeSet.folder, count: 1 }];

      setDeck(modifiedDeck);
    } else {
      setDeck([{ ...card, set: activeSet.folder, count: 1 }]);
    }
  };

  const handleNextCard = () => {
    setFlipped(false);
    const index = booster.findIndex((b) => !b.opened);
    const card = booster[index];
    handleLocaleStorage(card);
    const newBoosterValue = booster.map((b) =>
      b === card ? { ...card, opened: true } : b
    );
    setBooster(newBoosterValue);
    const collectionButton = document.getElementById("collection-button");
    if (collectionButton) {
      setTimeout(() => {
        collectionButton.classList.add("added-to-collection");
      }, 1000);
    }
    setTimeout(() => {
      if (newBoosterValue.every((b) => b.opened)) setIsOpening(false);
      if (collectionButton)
        collectionButton.classList.remove("added-to-collection");
    }, 1500);
  };

  return (
    <div className={classNames("card", className)} style={style}>
      <img
        ref={ref}
        className={classNames(
          "card-side front h-[50vh] rounded-2xl hover:brightness-120 transition !cursor-pointer select-none",
          { flipped: flipped }
        )}
        src={`${activeSet.folder}/card-back.png`}
        onClick={() => setFlipped(true)}
      />
      <LootCard
        className={classNames(
          "card-side back h-[50vh] rounded-2xl transition select-none cursor-pointer",
          { flipped: flipped }
        )}
        img={img}
        rarityPreset={rarity.toLowerCase()}
        size={{
          height: ref.current?.clientHeight,
          width: ref.current?.clientWidth,
        }}
        holographicOptions={
          rarity.toLowerCase() !== "common"
            ? {
                glow: true,
              }
            : undefined
        }
        onClick={handleNextCard}
      />
    </div>
  );
}
