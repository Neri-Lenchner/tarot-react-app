import {useState, useEffect, JSX} from "react";
import { cardsDeck } from "../../../arrays-&-models/tarot-deck-array/tarotDeck";
import { SpreadHeader } from "./celtic-spread-components/CelticSpreadHeader";
import { CelticSpread } from "./celtic-spread-components/CelticSpread";
import './CelticSpreadGlobal.css';
import {TarotCard} from "../../../arrays-&-models/tarot-deck-array/tarotCard.interface";

export function CelticSpreadGlobal(): JSX.Element {
    const [isSpread, setIsSpread] = useState<boolean>((): boolean => {
        const saved: string | null = localStorage.getItem("isSpread");
        if (saved === null) return false;
        try {
            return saved === "true";   // simpler & safer than JSON.parse for booleans
        } catch {
            return false;
        }
    });

    const [selectedCards, setSelectedCards] = useState<TarotCard[]>((): TarotCard[] => {
        const saved: string | null = localStorage.getItem("selectedCards");
        if (saved === null) return [];
        try {
            return JSON.parse(saved);
        } catch {
            return [];
        }
    });

    // Save to localStorage whenever isSpread or selectedCards changes
    useEffect(() => {
        console.log("Saving to localStorage — isSpread:", isSpread);
        localStorage.setItem("isSpread", JSON.stringify(isSpread));

        console.log("Saving selectedCards — length:", selectedCards.length);
        localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
    }, [isSpread, selectedCards]);

    function spreadThem1(): TarotCard[] {
        const shuffledDeck: TarotCard[] = [...cardsDeck];
        for (let i: number = shuffledDeck.length - 1 ; i >= 0 ; i--) {
            let j: number = Math.floor(Math.random() * (i + 1));
            [shuffledDeck[j], shuffledDeck[i]] = [shuffledDeck[i], shuffledDeck[j]];
        }
        return shuffledDeck;
    }

    const spreadThem: () => void = (): void => {

        const shuffled: TarotCard[] = spreadThem1();
        // const shuffled: TarotCard[] = [...cardsDeck].sort((): number => Math.random() - 0.5); // simpler shuffle
        const chosen: TarotCard[] = shuffled.slice(0, 10);

        console.log("Selected cards:", chosen);           // ← inspect what you actually set

        setSelectedCards(chosen);
        setIsSpread(true);
    };

    const clearSpread: () => void = (): void => {
        console.log("Clearing spread");
        setIsSpread(false)
        setSelectedCards([]);

        localStorage.removeItem("isSpread");
        localStorage.removeItem("selectedCards");
    };
    return (
        <div className="celtic-spread-container">
            <>
                <SpreadHeader
                    spreadThem={spreadThem}
                    clearSpread={clearSpread}
                />
                <CelticSpread
                    isSpread={isSpread}
                    cards={selectedCards}
                />
            </>
        </div>
    );
}

// This is the safer way to use local storage with React //

/*
  const [isSpread, setIsSpread] = React.useState(() => {

    // Load isSpread from localStorage, default to false if not found
    try {
      const savedIsSpread = localStorage.getItem("isSpread");
      return savedIsSpread ? JSON.parse(savedIsSpread) : false;
    } catch (e) {
      console.error("Error parsing isSpread from localStorage:", e);
      return false;
    }
  });


  const [selectedCards, setSelectedCards] = React.useState(() => {

    // Load selectedCards from localStorage, default to empty array if not found
    try {
      const savedCards = localStorage.getItem("selectedCards");
      return savedCards ? JSON.parse(savedCards) : [];
    } catch (e) {
      console.error("Error parsing selectedCards from localStorage:", e);
      return [];
    }
  });
*/





// This is the app functioning functionality:
/*
const [isSpread, setIsSpread] = React.useState(
    JSON.parse(localStorage.getItem("isSpread") || "false")
  );

  const [selectedCards, setSelectedCards] = React.useState(
    JSON.parse(localStorage.getItem("selectedCards") || "[]")
  );


  // Save to localStorage whenever isSpread or selectedCards changes
  React.useEffect(() => {
    localStorage.setItem("isSpread", JSON.stringify(isSpread));
    localStorage.setItem("selectedCards", JSON.stringify(selectedCards));
  }, [isSpread, selectedCards]);

  const spreadThem = () => {
    console.log("Spreading cards, deck size:", tarotDeck.length);
    const shuffledDeck = [...tarotDeck];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[random]] = [shuffledDeck[random], shuffledDeck[i]];

    }
    setSelectedCards(shuffledDeck.slice(0, 10));
    setIsSpread(true);
  };

  const clearSpread = () => {
    console.log("Clearing spread");
    setIsSpread(false);
    setSelectedCards([]);
    // Optionally clear localStorage:
    localStorage.removeItem("isSpread");
    localStorage.removeItem("selectedCards");
  };

  return (
    <>
      <SpreadHeader
        spreadThem={spreadThem}
        clearSpread={clearSpread} />

      <Spread
        isSpread={isSpread}
        cards={selectedCards} />
    </>
  );
 */