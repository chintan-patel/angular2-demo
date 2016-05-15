import {Component} from 'angular2/core';
import {TweetService} from '../tweet.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'history-detail',
    templateUrl: 'app/history/history-details/history.component.html',
    styleUrls: ['app/history/history-details/history.component.css'],
    providers: [TweetService, HTTP_PROVIDERS]

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
    constructor(private _tweetService: TweetService) {
        this._tweetService.getHistory()
            .subscribe(response => this.history = response);
    }
    toggleTableView() {
        this.tableView = !this.tableView;
    }
    getDate(date) {
        return new Date(date);
    }

    getTweet(_id: string) {
        this._tweetService.getTweets(_id)
            .subscribe(results => {
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
}
