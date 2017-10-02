///<reference path="../typings/tsd.d.ts"/>
import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';
import {appName as commonApp} from'../common/main';
import {appName as deckBuilderApp} from '../deckbuilder/main';
import {appName as deckManagerApp} from'../deckmanager/main';




// app name
export const appName:string = 'deckApp';

// register module, directives, services, etc.
angular.module(appName, ['ui.router', commonApp, deckBuilderApp, deckManagerApp]);


angular.module(appName).config(($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) => {
    const deckManagerStateS: any = {
        name: 'deckManager',
        url: '/',
        template: '<deck-manager-co-deck-manager />'
      };

    const deckBuilderState: any = {
        name: 'deckBuilder',
        url: '/deckBuilder/:id',
        template: '<deck-builder-co-deck-builder />'
    };
    
    $stateProvider.state(deckManagerStateS);
    $stateProvider.state(deckBuilderState);
    $urlRouterProvider.otherwise('/');
});
