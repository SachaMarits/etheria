import { useOpening } from "../../contexts/useOpening";
import { Card } from "./";

export default function PackedCard() {
  const { booster, flipped } = useOpening();

  return (
    <>
      {booster.map(({ img, opened, rarity }, index) => {
        const nonOpenedCards = booster.filter((card) => !card.opened);
        const nonOpenedIndex = nonOpenedCards.findIndex(
          (card) => card === booster[index]
        );

        const style =
          nonOpenedIndex !== -1
            ? {
                zIndex: 50 - nonOpenedIndex,
                opacity: 1 - 0.2 * nonOpenedIndex,
                filter: `brightness(${1 - 0.2 * nonOpenedIndex})`,
                top: `${0 + 0.75 * nonOpenedIndex}rem`,
                left: `${0 + 0.75 * nonOpenedIndex}rem`,
              }
            : {};

        return (
          <Card
            key={img + index}
            className={opened ? "opened" : "opening"}
            img={img}
            style={style}
            rarity={rarity}
            flipped={opened ? true : nonOpenedIndex === 0 ? flipped : false}
          />
        );
      })}
    </>
  );
}
