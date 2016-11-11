var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
let TweetService = class TweetService {
    constructor(_http) {
        this._http = _http;
    }
    getSentiments(hash) {
        return this._http.post('/api/words/' + hash, '')
            .map(this.mapResponse)
            .catch(this.handleError);
    }
    getTweets(_id) {
        return this._http.get('/api/record/' + _id)
            .map(response => {
            return response.json().analysis;
        });
    }
    putTweets(tweet_id) {
        let body = JSON.stringify({ id: tweet_id });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put('/api/words/' + tweet_id, body, options)
            .map(response => {
            return response.json().analysis;
        });
    }
    getHistory() {
        return this._http.get('/api/words/history')
            .map(response => response.json());
    }
    mapResponse(res) {
        return res.json().analysis.analysis;
    }
    handleError(error) {
        let errMsg;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
};
TweetService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], TweetService);
export { TweetService };
//# sourceMappingURL=tweet.service.js.map