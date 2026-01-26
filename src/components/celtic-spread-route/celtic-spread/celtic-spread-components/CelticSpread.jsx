export function Spread({ isSpread, cards }) {
    console.log("Spread rendering, isSpread:", isSpread, "cards:", cards);
    return (
        <div className="spread-container">
            <div className="heading">
                <div>
                    Tarot Spread
                </div>
            </div>
            <div className="card-container-1">
                {!isSpread ? (
                    <img className="card" src="Tarot-deck/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[0]?.image || "Tarot-deck/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-2">
                {!isSpread ? (
                    <img className="card" src="Tarot-deck/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[1]?.image || "Tarot-deck/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-3">
                {!isSpread ? (
                    <img className="card" src="Tarot-deck/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[2]?.image || "Tarot-deck/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-4">
                {!isSpread ? (
                    <img className="card" src="Tarot-deck/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[3]?.image || "Tarot-deck/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-5">
                {!isSpread ? (
                    <img className="card" src="Tarot-deck/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[4]?.image || "Tarot-deck/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-6">
                {!isSpread ? (
                    <img className="card" src="Tarot-deck/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[5]?.image || "Tarot-deck/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-7">
                {!isSpread ? (
                    <img className="card" src="Tarot-deck/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[6]?.image || "Tarot-deck/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-8">
                {!isSpread ? (
                    <img className="card" src="Tarot-deck/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[7]?.image || "Tarot-deck/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-9">
                {!isSpread ? (
                    <img className="card" src="Tarot-deck/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[8]?.image || "Tarot-deck/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-10">
                {!isSpread ? (
                    <img className="card" src="Tarot-deck/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[9]?.image || "Tarot-deck/cards-back.jpg"} />
                )}
            </div>
        </div>
    );
}