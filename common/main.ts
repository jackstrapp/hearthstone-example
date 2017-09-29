///<reference path="../typings/tsd.d.ts"/>

import registerServices from './services/commonServices';
import registerDirectives from './components/commonDirectives';

export const appName:string = 'common';

angular.module(appName, []);
registerServices(appName);
registerDirectives(appName);
