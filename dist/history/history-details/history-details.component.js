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
import { TweetService } from '../../shared/tweet.service';
import { ActivatedRoute, Router } from '@angular/router';
let HistoryDetailComponent = class HistoryDetailComponent {
    constructor(_tweetService, route, router) {
        this._tweetService = _tweetService;
        this.route = route;
        this.router = router;
        this.xkey = 'y';
        this.ykeys = ['a'];
        this.labels = ['words'];
        this.colors = ['#feb155', 'red', 'blue', 'green'];
        this.history = [];
        this.tableView = false;
        this.options = {
            element: 'chart',
            ymax: 'auto',
            ymin: 'auto',
            data: [],
            resize: true,
            xkey: this.xkey,
            ykeys: this.ykeys,
            labels: this.labels
        };
        this.loading = false;
        this.loading = true;
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let word = params['word'];
            this.getTweet(word);
        });
    }
    toggleTableView() {
        this.tableView = !this.tableView;
    }
    getDate(date) {
        return new Date(date);
    }
    getTweet(_id) {
        this.loading = true;
        this._tweetService.getTweets(_id)
            .subscribe(results => {
            this.loading = false;
            this.analysis = this.createChartValues(results);
            this.tweets = results;
            this.createGraph();
            this.twitterHandle = results.searchHash;
        });
    }
    createGraph() {
        if (this.chart) {
            this.chart.setData(this.analysis);
        }
        else {
            this.options.data = this.analysis;
            this.chart = Morris.Line(this.options);
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
    deleteTweet(id, index) {
        this._tweetService.putTweets(id)
            .subscribe(response => this.deleteId(index), err => this.logError(err));
    }
    deleteId(index) {
        this.history.splice(index, 1);
    }
    logError(err) {
        this.error = err._body.msg;
        console.error(err);
    }
};
HistoryDetailComponent = __decorate([
    Component({
        selector: 'history-detail',
        templateUrl: 'app/history/history-details/history-details.component.html',
        styleUrls: ['app/history/history-details/history-details.component.css'],
        providers: [TweetService],
    }),
    __metadata("design:paramtypes", [TweetService, ActivatedRoute,
        Router])
], HistoryDetailComponent);
export { HistoryDetailComponent };
//# sourceMappingURL=history-details.component.js.map