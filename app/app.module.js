"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var home_component_1 = require('./home/home.component');
var search_component_1 = require('./search/search.component');
var history_component_1 = require('./history/history.component');
var history_details_component_1 = require('./history/history-details/history-details.component');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'home',
                        component: home_component_1.HomeComponent
                    },
                    {
                        path: 'search',
                        component: search_component_1.SearchComponent
                    },
                    {
                        path: 'history',
                        component: history_component_1.HistoryComponent
                    },
                    {
                        path: 'history/:word',
                        component: history_details_component_1.HistoryDetailComponent
                    }
                ])],
            declarations: [home_component_1.HomeComponent, search_component_1.SearchComponent, history_component_1.HistoryComponent, history_details_component_1.HistoryDetailComponent],
            bootstrap: [home_component_1.HomeComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map