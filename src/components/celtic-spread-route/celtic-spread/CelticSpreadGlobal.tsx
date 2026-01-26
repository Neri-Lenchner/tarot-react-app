import { useState, useEffect} from "react";
import { cardsDeck } from "../../../arrays-&-models/tarot-deck-array/tarotDeck";
import { SpreadHeader } from "./celtic-spread-components/CelticSpreadHeader";
import { Spread } from "./celtic-spread-components/CelticSpread";

export function CelticSpreadGlobal() {
    const [isSpread, setIsSpread] = useState<boolean>(() => {
        const saved = localStorage.getItem("isSpread");
        if (saved === null) return false;
        try {
            return saved === "true";   // simpler & safer than JSON.parse for booleans
        } catch {
            return false;
        }
    });

    const [selectedCards, setSelectedCards] = useState<any[]>(() => {
        const saved = localStorage.getItem("selectedCards");
        if (saved === null) return [];
        try {
            return JSON.parse(saved);
        } catch {
            return [];
        }
    });

    // Save to localStorage whenever isSpread or selectedCards changes
    useEffect(() => {
        console.log("→ isSpread became:", isSpread);
        console.log("→ selectedCards count:", selectedCards.length);
        if (selectedCards.length > 0) {
            console.log("First card:", selectedCards[0]);
            // Check: does it have .image ? What is the key really called?
        }
    }, [isSpread, selectedCards]);

    const spreadThem = () => {
        console.log("Spreading cards... deck size:", cardsDeck.length);

        const shuffled = [...cardsDeck].sort(() => Math.random() - 0.5); // simpler shuffle
        const chosen = shuffled.slice(0, 10);

        console.log("Selected cards:", chosen);           // ← inspect what you actually set

        setSelectedCards(chosen);
        setIsSpread(true);

        // Log after update won't help – use useEffect instead (see below)
    };

    const clearSpread = () => {
        console.log("Clearing spread");
        setIsSpread(false)
        console.log(isSpread);
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
                <Spread
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