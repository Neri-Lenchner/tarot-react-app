import {cardsDeck} from "../../../arrays-&-models/tarot-deck-array/tarotDeck";
import {TarotCardContainer} from "../../tarot-card/TarotCardContainer";
import {TarotCard} from "../../../arrays-&-models/tarot-deck-array/tarotCard.interface";
import './TarotDeck.css';
import {JSX} from "react";

export function TarotDeck() {
    return (
        <div className="tarot-deck-container">
            {cardsDeck.map((card: TarotCard): JSX.Element => (
                <TarotCardContainer
                    key={card.id}
                    tarotCard={card}
                />
            ))}
        </div>
    );
}