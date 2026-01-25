import {cardsDeck} from "../../arrays-&-models/tarot-deck-array/tarotDeck";
import {TarotCard} from "../tarot-card/TarotCard";

export function TarotDeck() {
    return (
        <div className="tarot-deck-container">
            {cardsDeck.map((card) =>
                <TarotCard
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    image={card.image}
                />
            )}
        </div>
    );
}