import {appName} from '../../../main';

describe('common.coFooter', () => {
    let $compile:angular.ICompileService,
        $rootScope:any;

    beforeEach(() => {
        angular.mock.module(appName);

        inject((_$compile_:ng.ICompileService, _$rootScope_:ng.IRootScopeService) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });

    it('should render the footer component', () => {
        let template:angular.IAugmentedJQuery = angular.element('<div common-co-footer></div>');
        let element:angular.IAugmentedJQuery = $compile(template)($rootScope);

        $rootScope.$digest();
        expect(element.html()).toContain('<!-- common.coFooter -->');
    });
});
