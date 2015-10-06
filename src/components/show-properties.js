var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var FriendsService = require('components/friends.service');
var DisplayComponent = (function () {
    function DisplayComponent(friendsService) {
        this.myName = 'Alice';
        this.names = friendsService.names;
    }
    DisplayComponent.prototype.addNames = function (name) {
        console.log(name);
        this.names.push(name);
    };
    DisplayComponent.prototype.update = function () {
    };
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display',
            bindings: [FriendsService]
        }),
        angular2_1.View({
            templateUrl: 'components/show-properties.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof FriendsService !== 'undefined' && FriendsService) === 'function' && _a) || Object])
    ], DisplayComponent);
    return DisplayComponent;
    var _a;
})();
angular2_1.bootstrap(DisplayComponent);
//# sourceMappingURL=show-properties.js.map