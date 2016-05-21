import {Injectable} from 'angular2/core';
import {Http, RequestOptions, Headers} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class TweetService {

    constructor(private _http: Http) {
    }
    getSentiments(hash: string) {
        return this._http.post('/api/words/' + hash, '')
            .map(response => {
                return response.json().analysis.analysis;
            });
    }
    getTweets(_id: string) {
        return this._http.get('/api/record/' + _id)
            .map(response => {
                return response.json().analysis;
            });
    }
    putTweets(tweet_id: any) {
        var body = JSON.stringify({id : tweet_id});
        var headers = new Headers({'Content-Type': 'application/json'});
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

}