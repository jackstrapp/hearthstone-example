import { ICard } from '../../models/ICard';
export interface ICardsService {
    get: () => ICard[];
}
