import {cardsDeck} from "../../../arrays-&-models/tarot-deck-array/tarotDeck";
import {TarotCardContainer} from "../../tarot-card/TarotCardContainer";
import './TarotDeck.css';

export function TarotDeck() {
    return (
        <div className="tarot-deck-container">
            {cardsDeck.map(card => (
                <TarotCardContainer
                    key={card.id}
                    tarotCard={card}
                />
            ))}
        </div>
    );
}