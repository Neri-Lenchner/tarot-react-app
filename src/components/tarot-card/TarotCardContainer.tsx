import { TarotCard } from "../../arrays-&-models/tarot-deck-array/tarotCard.interface";

interface TarotCardContainerProps {
    tarotCard: TarotCard;
}

export function TarotCardContainer({ tarotCard }: TarotCardContainerProps) {
    return (
        <div className="TarotCard" id={tarotCard.id.toString()}>
            <img
                src={tarotCard.src}
                alt={tarotCard.alt}
                className="small-card"
                loading="lazy"
            />
        </div>
    );
}