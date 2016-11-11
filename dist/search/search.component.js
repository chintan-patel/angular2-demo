var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TweetService } from '../shared/tweet.service';
let SearchComponent = class SearchComponent {
    constructor(_tweetService) {
        this._tweetService = _tweetService;
        this.history = [];
        this.twitterHandle = '';
        this.analysis = {};
        this.tweets = [];
        this.xkey = 'y';
        this.ykeys = ['a'];
        this.labels = ['words'];
        this.data = [];
        this.Morris = Morris;
        this.options = {
            element: 'chart',
            ymax: 'auto',
            ymin: 'auto',
            resize: true,
            xkey: this.xkey,
            ykeys: this.ykeys,
            labels: this.labels,
            data: this.data
        };
    }
    getSentiments() {
        this._tweetService.getSentiments(this.twitterHandle)
            .subscribe(results => {
            this.analysis = this.createChartValues(results);
            this.tweets = results;
            this.createGraph();
        });
    }
    createGraph() {
        if (this.chart) {
            this.chart.setData(this.analysis);
        }
        else {
            this.options.data = this.analysis;
            this.chart = this.Morris.Line(this.options);
        }
    }
    createChartValues(data) {
        let values = [];
        for (let i = 0; i < data.length; i++) {
            let tmp = {
                y: i + 1,
                a: data[i].score
            };
            values.push(tmp);
        }
        ;
        return values;
    }
};
SearchComponent = __decorate([
    Component({
        selector: 'search',
        templateUrl: 'app/search/search.component.html',
        styleUrls: ['app/search/search.component.css'],
        providers: [TweetService]
    }),
    __metadata("design:paramtypes", [TweetService])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map