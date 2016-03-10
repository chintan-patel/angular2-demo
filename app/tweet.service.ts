import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class TweetService {

    constructor(private _http : Http) {

    }
    getTweets() {
        return this._http.get('/api/tweets.json')
            .map(response => {
                return response.json().analysis;
            });
    }

}