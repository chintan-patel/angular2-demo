System.register(['angular2/core', '../tweet.service', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweet_service_1, http_1;
    var HistoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HistoryComponent = (function () {
                function HistoryComponent(_tweetService) {
                    var _this = this;
                    this._tweetService = _tweetService;
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
                    this._tweetService.getHistory()
                        .subscribe(function (response) { return _this.history = response; });
                }
                HistoryComponent.prototype.toggleTableView = function () {
                    this.tableView = !this.tableView;
                };
                HistoryComponent.prototype.getDate = function (date) {
                    return new Date(date);
                };
                HistoryComponent.prototype.getTweet = function (_id) {
                    var _this = this;
                    this._tweetService.getTweets(_id)
                        .subscribe(function (results) {
                        _this.analysis = _this.createChartValues(results);
                        _this.tweets = results;
                        _this.createGraph();
                        _this.twitterHandle = results.searchHash;
                    });
                };
                HistoryComponent.prototype.createGraph = function () {
                    if (this.chart) {
                        this.chart.setData(this.analysis);
                    }
                    else {
                        this.options.data = this.analysis;
                        this.chart = Morris.Line(this.options);
                    }
                };
                HistoryComponent.prototype.createChartValues = function (data) {
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
                HistoryComponent = __decorate([
                    core_1.Component({
                        selector: 'history-detail',
                        templateUrl: 'app/history/history.component.html',
                        styleUrls: ['app/history/history.component.css'],
                        providers: [tweet_service_1.TweetService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], HistoryComponent);
                return HistoryComponent;
            }());
            exports_1("HistoryComponent", HistoryComponent);
        }
    }
});
//# sourceMappingURL=history.component.js.map