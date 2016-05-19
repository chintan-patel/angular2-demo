System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var TweetService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            TweetService = (function () {
                function TweetService(_http) {
                    this._http = _http;
                }
                TweetService.prototype.getSentiments = function (hash) {
                    return this._http.post('/api/words/' + hash, '')
                        .map(function (response) {
                        return response.json().analysis.analysis;
                    });
                };
                TweetService.prototype.getTweets = function (_id) {
                    return this._http.get('/api/record/' + _id)
                        .map(function (response) {
                        return response.json().analysis;
                    });
                };
                TweetService.prototype.putTweets = function (tweet_id) {
                    var headers = new http_1.Headers();
                    console.log(tweet_id);
                    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.put('/api/words/' + tweet_id, '')
                        .map(function (response) {
                        return response.json().analysis;
                    });
                };
                TweetService.prototype.getHistory = function () {
                    return this._http.get('/api/words/history')
                        .map(function (response) { return response.json(); });
                };
                TweetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TweetService);
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map