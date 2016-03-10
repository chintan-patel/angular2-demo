System.register(['angular2/core', './tweet.service', 'angular2/http'], function(exports_1, context_1) {
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
    var AppComponent, HEROES;
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
                    this.title = 'Social Sentiment Analyzer';
                    this.heroes = HEROES;
                    this.twitterHandle = '#trump';
                    this.xkey = 'y';
                    this.ykeys = ["a"];
                    this.labels = ["Comments"];
                    this.colors = ["#feb155"];
                }
                AppComponent.prototype.getTweet = function () {
                    var _this = this;
                    this._tweetService.getTweets()
                        .subscribe(function (results) {
                        _this.analysis = _this.createChartValues(results);
                        _this.tweets = results;
                        new Morris.Line({
                            // ID of the element in which to draw the chart.
                            element: 'chart',
                            // Chart data records -- each entry in this array corresponds to a point on
                            // the chart.
                            data: _this.analysis,
                            // The name of the data record attribute that contains x-values.
                            xkey: _this.xkey,
                            // A list of names of data record attributes that contain y-values.
                            ykeys: _this.ykeys,
                            // Labels for the ykeys -- will be displayed when you hover over the
                            // chart.
                            labels: _this.labels
                        });
                    });
                };
                AppComponent.prototype.createChartValues = function (data) {
                    var values = [];
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        var tmp = {
                            y: i + 1,
                            a: (data[i].score > 0) ? data[i].score : 0
                        };
                        values.push(tmp);
                    }
                    ;
                    console.log(values);
                    return values;
                };
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-view',
                        templateUrl: 'app/hero.html',
                        styleUrls: ['app/hero.css'],
                        providers: [tweet_service_1.TweetService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            HEROES = [
                { "id": 11, "name": "Mr. Nice" },
                { "id": 12, "name": "Narco" },
                { "id": 13, "name": "Bombasto" },
                { "id": 14, "name": "Celeritas" },
                { "id": 15, "name": "Magneta" },
                { "id": 16, "name": "RubberMan" },
                { "id": 17, "name": "Dynama" },
                { "id": 18, "name": "Dr IQ" },
                { "id": 19, "name": "Magma" },
                { "id": 20, "name": "Tornado" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map