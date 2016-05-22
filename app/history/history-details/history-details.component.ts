import {Component} from 'angular2/core';
import {TweetService} from '../../tweet.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {NgIf} from 'angular2/common';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'history-detail',
    templateUrl: 'app/history/history-details/history-details.component.html',
    styleUrls: ['app/history/history-details/history-details.component.css'],
    providers: [TweetService, HTTP_PROVIDERS],
    directives: [NgIf]
})

export class HistoryDetailComponent {
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
    constructor(params: RouteParams, private _tweetService: TweetService) {
        this.loading = true;
        let word = params.get('word');
        console.log(word);
        this.getTweet(word);
    }
    toggleTableView() {
        this.tableView = !this.tableView;
    }
    getDate(date) {
        return new Date(date);
    }

    getTweet(_id: string) {
        this.loading = true;
        this._tweetService.getTweets(_id)
            .subscribe(results => {
                this.loading = false;
                this.analysis = this.createChartValues(results);
                this.tweets = results;
                this.createGraph();
                this.twitterHandle = results.searchHash;
            });
    }
    createGraph() {
        if (this.chart) {
            this.chart.setData(this.analysis);
        } else {
            this.options.data = this.analysis;
            this.chart = Morris.Line(this.options);
        }
    }

    createChartValues(data) {
        var values = [];
        for (var i = 0; i < data.length; i++) {
            var tmp = {
                y: i + 1,
                a: data[i].score
            };
            values.push(tmp);
        };
        return values;
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
