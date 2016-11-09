import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TweetService {

    constructor(private _http: Http) {
    }
    getSentiments(hash: string) {
        return this._http.post('/api/words/' + hash, '')
            .map(this.mapResponse)
            .catch(this.handleError)


    }
    private mapResponse(res: Response) {
        return res.json().analysis.analysis;
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getTweets(_id: string) {
        return this._http.get('/api/record/' + _id)
            .map(response => {
                return response.json().analysis;
            });
    }
    putTweets(tweet_id: any) {
        var body = JSON.stringify({ id: tweet_id });
        var headers = new Headers({ 'Content-Type': 'application/json' });
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