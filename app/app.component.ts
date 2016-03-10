import {Component} from 'angular2/core';
import {TweetService} from './tweet.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
    selector: 'main-view',
    templateUrl: 'app/hero.html',
    styleUrls: ['app/hero.css'],
    providers: [TweetService, HTTP_PROVIDERS]

})
export class AppComponent {
    title = 'Social Sentiment Analyzer';
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
        // ID of the element in which to draw the chart.
        element: 'chart',
        ymax: 'auto',
        ymin: 'auto',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [],
        resize: true,
        // The name of the data record attribute that contains x-values.
        xkey: this.xkey,
        // A list of names of data record attributes that contain y-values.
        ykeys: this.ykeys,
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: this.labels
    }
    constructor(private _tweetService: TweetService) {
        this._tweetService.getHistory()
            .subscribe(response => this.history = response);
    }
    toggleTableView() {
        this.tableView = !this.tableView;
    }
    getSentiments() {
        this._tweetService.getSentiments(this.twitterHandle)
            .subscribe(results => {
                this.analysis = this.createChartValues(results);
                this.tweets = results;
                this.createGraph();
            });
    }
    getTweet(_id: string) {
        this._tweetService.getTweets(_id)
            .subscribe(results => {
                this.analysis = this.createChartValues(results);
                this.tweets = results;
                this.createGraph();
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