///<reference path="../typings/tsd.d.ts"/>
import registerDirectives from './components/deckBuilderDirectives';
import registerServices from './services/deckBuilderServices';

// app name
export const appName:string = 'deckBuilder';

// register module, directives, services, etc.
angular.module(appName, ['common']);
registerDirectives(appName);
registerServices(appName);
