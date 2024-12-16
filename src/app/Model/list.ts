export class List {
    constructor(list?: List) {
        if (list) {
            this.name = list.name;
            this.cards = list.cards
        }
    }
    name: string = '';
    cards: Array<Card> = [];
}

export class Card {
    constructor(card?: Card) {
        if (card) {
            this.name = card.name;
            this.description = card.description
        }
    }
    name: string = '';
    description: string = '';
}