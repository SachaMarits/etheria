import React, { createContext, useState, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/localStorage";
import { getSets } from "../services/cards.service";

const OpeningContext = createContext(null);

// Custom hook pour facilement importer le contexte des demandes de remboursement tout en gérant l'erreur potentielle
export const useOpening = () => {
  const context = useContext(OpeningContext);
  if (!context)
    throw new Error(
      "useOpening should be used inside his provider (OpeningContextProvider)"
    );
  return context;
};

// Contexte des demandes de remboursement permettant d'utiliser les différentes informations dans les enfants
export function OpeningContextProvider({ children }) {
  const [isOpening, setIsOpening] = useState(false);
  const [booster, setBooster] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [deck, setDeck] = useLocalStorage("deck", []);
  const [set, setSet] = useLocalStorage("set", 1);

  const sets = useMemo(() => getSets(), []);

  const activeSet = sets[set - 1];

  return (
    <OpeningContext.Provider
      value={{
        isOpening,
        setIsOpening,
        booster,
        setBooster,
        flipped,
        setFlipped,
        deck,
        setDeck,
        set,
        setSet,
        sets,
        activeSet,
      }}
    >
      {children}
    </OpeningContext.Provider>
  );
}
