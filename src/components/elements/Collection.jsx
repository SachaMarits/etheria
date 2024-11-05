import React, { useMemo, useState } from "react";
import FloatingSidebar from "./FloatingSidebar";
import { getCards } from "../../services/cards.service";
import { useOpening } from "../../contexts/useOpening";
import Badge from "./Badge";

export default function Collection() {
  const cards = useMemo(() => getCards(), []);
  const { deck, activeSet } = useOpening();
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  return (
    <>
      <div
        id="collection-button"
        className="flex items-center gap-2 cursor-pointer h-7 button"
        onClick={() => setIsCollectionOpen(true)}
      >
        <i className="mdi mdi-cards-playing text-2xl max-md:!text-white" />
        <p className="hidden md:block">Collection</p>
      </div>

      <FloatingSidebar
        direction="right"
        show={isCollectionOpen}
        onClose={() => setIsCollectionOpen(false)}
        title="Collection"
      >
        <div className="container px-4">
          {cards
            .filter(({ img }) => img.startsWith(`/${activeSet.folder}/`))
            .map(({ number, rarity, img }) => {
              const activeCard = deck
                ? deck.find(
                    (c) => c.number === number && c.set === activeSet.folder
                  )
                : null;

              return (
                <div
                  key={number}
                  className={`${
                    !activeCard ? "opacity-20" : ""
                  } flex flex-col items-center justify-center m-3 bg-[#160B1F] pt-3 rounded-lg relative`}
                >
                  <h4 className="flex gap-2 items-center mb-2">
                    <strong>#{number}</strong>{" "}
                    <Badge color={rarity}>{rarity}</Badge>
                  </h4>
                  {activeCard?.count && (
                    <span class="absolute rounded-full pt-[0.15rem] px-[0.05rem] text-xs font-medium content-[''] leading-none grid place-items-center top-[2%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-[#d43781] text-white min-w-[20px] min-h-[20px]">
                      {activeCard.count}
                    </span>
                  )}

                  <img className="rounded-b-lg" src={img} height={300} />
                </div>
              );
            })}
        </div>
      </FloatingSidebar>
    </>
  );
}
