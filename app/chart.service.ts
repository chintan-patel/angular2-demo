import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {

    constructor(private _http : Http) {

    }
    getSentiments(hash : string) {
        return this._http.post('/api/words/' + hash, '')
            .map(response => {
                return response.json().analysis.analysis;
            });
    }
    getTweets(_id : string) {
        return this._http.get('/api/record/' + _id)
            .map(response => {
                return response.json().analysis;
            });
    }
    getHistory() {
        return this._http.get('/api/words/history')
            .map(response => response.json());
    }

}