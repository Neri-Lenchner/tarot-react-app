export function CelticSpreadGlobal() {
    return (
        <div className="celtic-spread-container">
            Celtic Spread
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
    console.log("Spreading cards, deck size:", cardsDeck.length);
    const shuffledDeck = [...cardsDeck];
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
    // Optionally clear localStorage
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