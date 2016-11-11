var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import { HistoryDetailComponent } from './history/history-details/history-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            HttpModule,
            FormsModule,
            RouterModule.forRoot([
                {
                    path: '',
                    component: SearchComponent
                },
                {
                    path: 'search',
                    component: SearchComponent
                },
                {
                    path: 'history',
                    component: HistoryComponent
                },
                {
                    path: 'history/:word',
                    component: HistoryDetailComponent
                }
            ])
        ],
        declarations: [HomeComponent, SearchComponent, HistoryComponent, HistoryDetailComponent],
        bootstrap: [HomeComponent],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map