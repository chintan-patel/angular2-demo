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
var tweet_service_1 = require('../../tweet.service');
var router_1 = require('@angular/router');
var HistoryDetailComponent = (function () {
    function HistoryDetailComponent(_tweetService, route, router) {
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
    HistoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var word = params['word']; // (+) converts string 'id' to a number
            _this.getTweet(word);
        });
    };
    HistoryDetailComponent.prototype.toggleTableView = function () {
        this.tableView = !this.tableView;
    };
    HistoryDetailComponent.prototype.getDate = function (date) {
        return new Date(date);
    };
    HistoryDetailComponent.prototype.getTweet = function (_id) {
        var _this = this;
        this.loading = true;
        this._tweetService.getTweets(_id)
            .subscribe(function (results) {
            _this.loading = false;
            _this.analysis = _this.createChartValues(results);
            _this.tweets = results;
            _this.createGraph();
            _this.twitterHandle = results.searchHash;
        });
    };
    HistoryDetailComponent.prototype.createGraph = function () {
        if (this.chart) {
            this.chart.setData(this.analysis);
        }
        else {
            this.options.data = this.analysis;
            this.chart = Morris.Line(this.options);
        }
    };
    HistoryDetailComponent.prototype.createChartValues = function (data) {
        var values = [];
        for (var i = 0; i < data.length; i++) {
            var tmp = {
                y: i + 1,
                a: data[i].score
            };
            values.push(tmp);
        }
        ;
        return values;
    };
    HistoryDetailComponent.prototype.deleteTweet = function (id, index) {
        var _this = this;
        this._tweetService.putTweets(id)
            .subscribe(function (response) { return _this.deleteId(index); }, function (err) { return _this.logError(err); }, function () { });
    };
    HistoryDetailComponent.prototype.deleteId = function (index) {
        this.history.splice(index, 1);
    };
    HistoryDetailComponent.prototype.logError = function (err) {
        this.error = err._body.msg;
        console.error(err);
    };
    HistoryDetailComponent = __decorate([
        core_1.Component({
            selector: 'history-detail',
            templateUrl: 'app/history/history-details/history-details.component.html',
            styleUrls: ['app/history/history-details/history-details.component.css'],
            providers: [tweet_service_1.TweetService],
        }), 
        __metadata('design:paramtypes', [tweet_service_1.TweetService, router_1.ActivatedRoute, router_1.Router])
    ], HistoryDetailComponent);
    return HistoryDetailComponent;
}());
exports.HistoryDetailComponent = HistoryDetailComponent;
//# sourceMappingURL=history-details.component.js.map