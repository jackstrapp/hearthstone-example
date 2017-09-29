// import directives
import coDeckBuilder from './coDeckBuilder/coDeckBuilder';
import coDeck from './coDeckBuilder/coDeck/coDeck';
import coCardList from './coDeckBuilder/coCardList/coCardList';
import coCardListFilter from './coDeckBuilder/coCardList/coCardListFilter/coCardListFilter';

// register directives
export default function registerDirectives(appName:string):void {
    'use strict';

    angular.module(appName)
        .directive('deckBuilderCoDeckBuilder', coDeckBuilder)
        .directive('deckBuilderCoDeck', coDeck)
        .directive('deckBuilderCoCardList', coCardList)
        .directive('deckBuilderCoCardListFilter', coCardListFilter);
}
