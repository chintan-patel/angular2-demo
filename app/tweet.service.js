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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var TweetService = (function () {
    function TweetService(_http) {
        this._http = _http;
    }
    TweetService.prototype.getSentiments = function (hash) {
        return this._http.post('/api/words/' + hash, '')
            .map(this.mapResponse)
            .catch(this.handleError);
    };
    TweetService.prototype.mapResponse = function (res) {
        return res.json().analysis.analysis;
    };
    TweetService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    TweetService.prototype.getTweets = function (_id) {
        return this._http.get('/api/record/' + _id)
            .map(function (response) {
            return response.json().analysis;
        });
    };
    TweetService.prototype.putTweets = function (tweet_id) {
        var body = JSON.stringify({ id: tweet_id });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put('/api/words/' + tweet_id, body, options)
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
exports.TweetService = TweetService;
//# sourceMappingURL=tweet.service.js.map