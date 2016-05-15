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
    var AppComponent;
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
            AppComponent = (function () {
                function AppComponent(_tweetService) {
                    this._tweetService = _tweetService;
                    this.history = [];
                    this.twitterHandle = '';
                    this.analysis = {};
                    this.tweets = [];
                    this.xkey = 'y';
                    this.ykeys = ['a'];
                    this.labels = ['words'];
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
                }
                AppComponent.prototype.getSentiments = function () {
                    var _this = this;
                    this._tweetService.getSentiments(this.twitterHandle)
                        .subscribe(function (results) {
                        _this.analysis = _this.createChartValues(results);
                        _this.tweets = results;
                        _this.createGraph();
                    });
                };
                AppComponent.prototype.createGraph = function () {
                    if (this.chart) {
                        this.chart.setData(this.analysis);
                    }
                    else {
                        this.options.data = this.analysis;
                        this.chart = Morris.Line(this.options);
                    }
                };
                AppComponent.prototype.createChartValues = function (data) {
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
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-view',
                        templateUrl: 'app/home/home.component.html',
                        styleUrls: ['app/home/home.component.css'],
                        providers: [tweet_service_1.TweetService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map