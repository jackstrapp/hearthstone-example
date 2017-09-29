// import services
import * as angular from 'angular';
import CardsService from './CardsService/CardsService';
import LocalStorageService from './LocalStorageService/LocalStorageService';

// register services
export default function registerServices(appName:string):void {
    'use strict';

    angular.module(appName)
        .service('commonCardsService', CardsService)
        .service('commonLocalStorageService', LocalStorageService);
}
