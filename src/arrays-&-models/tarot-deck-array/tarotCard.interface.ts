// tarotCard.interface.ts
export interface TarotCard {
    id: number;
    src: string;
    alt: string;
    name: string;          // required
    className: string;     // required (or ? if optional)
}