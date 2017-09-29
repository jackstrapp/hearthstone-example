import {IDataService} from './IDataService';
import {IDeckBuilderPageValue} from '../../models/IDeckBuilderPageValue';
import {ICard} from '../../../common/models/ICard';
import {IDeck} from '../../../common/models/IDeck';
import {ILocalStorageService} from '../../../common/services/LocalStorageService/ILocalStorageService';
import {ICardsService} from '../../../common/services/CardsService/ICardsService';
import * as angular from 'angular';
import {StateService} from '@uirouter/angularjs';

export default class DataService implements IDataService {
    private $window:angular.IWindowService;
    private CardsService: ICardsService;
    private localStorageService:ILocalStorageService;
    private dataModel:DataModel;
    private state: StateService;

    constructor($window:angular.IWindowService,
                CardsService:ICardsService,
                localStorageService:ILocalStorageService,
                $stateParams: any,
                $state: StateService
            ) {
        this.$window = $window;
        this.CardsService = CardsService;
        this.localStorageService = localStorageService;
        this.dataModel = new DataModel();
        this.state = $state;

        // init data model
        let pageValue:IDeckBuilderPageValue = {cards: this.CardsService.get()};
        // this.dataModel.setPageValue(pageValue);

        if (this.$window.location.hash) {
            // very naive deck getting
            // obviously a bad implementation with multi level arrays etc., but enough for a demo
            // it would probably also be better not to do all of this logic in the constructor because it make testing harder
            // TODO: Fix the above
            let deckId:string = $stateParams.id.toString();
            let decks:IDeck[] = this.localStorageService.loadSettings<IDeck[]>('decks');
            let deck:IDeck = decks.filter((searchDeck:IDeck) => {
                return searchDeck.id === deckId;
            })[0];

            this.dataModel.setDeck(deck);
            pageValue.cards = pageValue.cards.map((card:ICard) => {
                deck.cards.forEach((searchCard:ICard) => {
                    // probably should have ids for cards and not compare by name
                    // TODO: Implement an ID as part of the card model
                    if (searchCard.name === card.name) {
                        card.selected = true;
                    }
                });

                return card;
            });
            this.dataModel.setPageValue(pageValue);
            this.dataModel.setFilter('');
        } else {
            this.backToManager();
        }
    }

    public getFilteredCardList():ICard[] {
        if (this.dataModel.getFilter() !== '') {
            return this.getCardList().filter((card:ICard) => {
                return card.name.toLowerCase().indexOf(this.dataModel.getFilter().toLowerCase()) > -1;
            });
        }

        return this.getCardList();
    }

    public getChosenCards():ICard[] {
        return this.getCardList().filter((card:ICard) => {
            return card.selected;
        });
    }

    public getDeck():IDeck {
        return this.dataModel.getDeck();
    }

    public setFilter(filter:string):void {
        this.dataModel.setFilter(filter);
    }

    public toggleCard(card:ICard):void {
        let cards:ICard[] = this.getCardList();

        cards.map((currentCard:ICard) => {
            if (currentCard === card) {
                card.selected = !card.selected;
            }
        });

        let currentDeck:IDeck = this.dataModel.getDeck();
        currentDeck.cards = cards.filter((currentCard:ICard) => {
            return currentCard.selected;
        });
        this.dataModel.setDeck(currentDeck);
        let decks:IDeck[] = this.localStorageService.loadSettings<IDeck[]>('decks');
        decks = decks.map((searchDeck:IDeck) => {
            if (searchDeck.id === currentDeck.id) {
                return currentDeck;
            }

            return searchDeck;
        });
        this.localStorageService.saveSettings<IDeck[]>('decks', decks);

        this.dataModel.setCards(cards);
    }

    public backToManager():void {
        // this.$window.location.href = '.';
        this.state.go('deckManager');
    }

    private getCardList():ICard[] {
        return this.dataModel.getPageValue().cards;
    }
}

class DataModel {
    private pageValue:IDeckBuilderPageValue;
    private filter:string;
    private deck:IDeck;

    public getFilter():string {
        return this.filter;
    }

    public setFilter(value:string):void {
        this.filter = value;
    }

    public getPageValue():IDeckBuilderPageValue {
        return this.pageValue;
    }

    public setPageValue(value:IDeckBuilderPageValue):void {
        this.pageValue = value;
    }

    public getCards(cards:ICard[]):void {
        this.getPageValue().cards;
    }

    public setCards(cards:ICard[]):void {
        this.getPageValue().cards = cards;
    }

    public getDeck():IDeck {
        return this.deck;
    }

    public setDeck(deck:IDeck):void {
        this.deck = deck;
    }
}

DataService.$inject = ['$window', 'commonCardsService', 'commonLocalStorageService', '$stateParams', '$state'];
