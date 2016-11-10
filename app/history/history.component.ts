import { Component } from '@angular/core';
import { TweetService } from '../shared/tweet.service';
import { Router } from '@angular/router';
@Component({
    selector: 'history',
    templateUrl: 'app/history/history.component.html',
    styleUrls: ['app/history/history.component.css'],
    providers: [TweetService]
})

export class HistoryComponent {
    twitterHandle: any;
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
    };
    loading = false;
    constructor(private _tweetService: TweetService, private router: Router) {
        this.loading = true;
        this._tweetService.getHistory()
            .subscribe(response => {
                this.loading = false;
                this.history = response;
            });
    }
    onSelectTweet(tweet: any) {
        this.router.navigate(['/history', tweet._id]);
    }
    toggleTableView() {
        this.tableView = !this.tableView;
    }
    getDate(date: string) {
        return new Date(date);
    }
    deleteTweet(id: string, index: number) {
        this._tweetService.putTweets(id)
            .subscribe(
            response => this.deleteId(index),
            err => this.logError(err)
            );
    }
    deleteId(index: number) {
        this.history.splice(index, 1);
    }
    logError(err: any) {
        this.error = err._body.msg;
        console.error(err);
    }
}
