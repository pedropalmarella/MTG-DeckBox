import type {CardProps} from "@/interfaces/CardProps.ts";

export async function getCardByName(cardName: string): Promise<CardProps> {
    const apiUrl = `https://api.scryfall.com/cards/named?fuzzy=${cardName}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Card not found: ${response.status}`);
        }
        const cardData = await response.json();

        const newCard: CardProps = {
            name: cardData.name,
            img: cardData.image_uris.small,
            oracle: cardData.oracle_text,
        };

        return newCard;

    } catch (err) {
        console.log(err)
        throw err;
    }

}