import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

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
    putTweets(tweet : any) {
        var body = JSON.stringify(tweet);
        return this._http.put('/api/words', body)
            .map(response => {
                return response.json().analysis;
            });
    }
    getHistory() {
        return this._http.get('/api/words/history')
            .map(respones => respones.json());
    }

}