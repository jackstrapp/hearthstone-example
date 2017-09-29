import { ICard } from '../../../models/ICard';
import {ICardsService} from '../../../services/CardsService/ICardsService';
import CardsService from '../../../services/CardsService/CardsService';


describe('CardsService', () => {
    let cardsService:ICardsService;

    beforeEach(() => {
        cardsService = new CardsService();
    });

    it(' get method should returns an array', () => {
        const result: any[] = cardsService.get();
        expect(result.length).toBeDefined();
        expect(result.length).toBeGreaterThan(0);
    });

    it(' get method result items should looks like an ICard', () => {
        const card: ICard = cardsService.get()[0];
        expect(card.attack).toBeDefined();
        expect(card.cost).toBeDefined();
        expect(card.hp).toBeDefined();
        expect(card.image).toBeDefined();
        expect(card.name).toBeDefined();
        expect(card.rarity).toBeDefined();
        expect(card.selected).toBeDefined();
    });
});
