import {Component} from 'angular2/core';
import {TweetService} from '../tweet.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NgIf} from 'angular2/common';

@Component({
    selector: 'history',
    templateUrl: 'app/history/history.component.html',
    styleUrls: ['app/history/history.component.css'],
    providers: [TweetService, HTTP_PROVIDERS],
    directives: [NgIf, ROUTER_DIRECTIVES]
})

export class HistoryComponent {
    twitterHandle;
    tweets: Array<any>;
    analysis: any;
    xkey = 'y';
    ykeys = ['a'];
    labels = ['words'];
    colors = ['#feb155', 'red', 'blue', 'green'];
    history: any = [];
    chart: any;
    error: string;
    tableView: boolean = false;
    options: any = {
        element: 'chart',
        ymax: 'auto',
        ymin: 'auto',
        data: [],
        resize: true,
        xkey: this.xkey,
        ykeys: this.ykeys,
        labels: this.labels
    }
    loading = false;
    constructor(private _tweetService: TweetService) {
        this.loading = true;
        this._tweetService.getHistory()
            .subscribe(response => {
                this.loading = false;
                this.history = response;
            });
    }
    toggleTableView() {
        this.tableView = !this.tableView;
    }
    getDate(date) {
        return new Date(date);
    }
    deleteTweet (id: string, index) {
        this._tweetService.putTweets(id)
            .subscribe(
                response => this.deleteId(index),
                err => this.logError(err),
                () => {}

            );
    }
    deleteId(index) {
        this.history.splice(index,1);
    }
    logError(err) {
        this.error = err._body.msg;
        console.error(err);
    }
}
