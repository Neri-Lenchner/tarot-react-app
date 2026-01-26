export function Spread({ isSpread , cards }: {isSpread: boolean, cards: any[]}) {
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
                    <img className="card" src="/Tarot-deck-images/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[0]?.src || "/Tarot-deck-images/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-2">
                {!isSpread ? (
                    <img className="card" src="/Tarot-deck-images/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[1]?.src || "/Tarot-deck-images/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-3">
                {!isSpread ? (
                    <img className="card" src="/Tarot-deck-images/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[2]?.src || "/Tarot-deck-images/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-4">
                {!isSpread ? (
                    <img className="card" src="/Tarot-deck-images/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[3]?.src || "/Tarot-deck-images/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-5">
                {!isSpread ? (
                    <img className="card" src="/Tarot-deck-images/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[4]?.src || "/Tarot-deck-images/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-6">
                {!isSpread ? (
                    <img className="card" src="/Tarot-deck-images/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[5]?.src || "/Tarot-deck-images/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-7">
                {!isSpread ? (
                    <img className="card" src="/Tarot-deck-images/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[6]?.src || "/Tarot-deck-images/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-8">
                {!isSpread ? (
                    <img className="card" src="/Tarot-deck-images/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[7]?.src || "/Tarot-deck-images/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-9">
                {!isSpread ? (
                    <img className="card" src="/Tarot-deck-images/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[8]?.src || "/Tarot-deck-images/cards-back.jpg"} />
                )}
            </div>
            <div className="card-container-10">
                {!isSpread ? (
                    <img className="card" src="/Tarot-deck-images/cards-back.jpg" />
                ) : (
                    <img className="card" src={cards[9]?.src || "/Tarot-deck-images/cards-back.jpg"} />
                )}
            </div>
        </div>
    );
}