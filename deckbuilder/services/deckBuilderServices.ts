// import directives
import FacadeService from './FacadeService/FacadeService';
import DataService from './DataService/DataService';

// register directives
export default function registerServices(appName:string):void {
    'use strict';

    angular.module(appName)
        .service('deckBuilderFacadeService', FacadeService)
        .service('deckBuilderDataService', DataService);
}
