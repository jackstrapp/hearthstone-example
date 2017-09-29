///<reference path="../typings/tsd.d.ts"/>
import registerDirectives from './components/deckManagerDirectives';
import registerServices from './services/deckManagerServices';

// app name
export const appName:string = 'deckManager';

// register module, directives, services, etc.
angular.module(appName, ['common']);
registerDirectives(appName);
registerServices(appName);

