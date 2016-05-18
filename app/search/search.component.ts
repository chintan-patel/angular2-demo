import {Component} from 'angular2/core';
import {TweetService} from '../tweet.service';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'search',
    templateUrl: 'app/search/search.component.html',
    styleUrls: ['app/search/search.component.css'],
    providers: [TweetService, HTTP_PROVIDERS]
})

export class SearchComponent {
    chart;
    history : Array<any> = [];
    twitterHandle : string = '';
    analysis : Object = {};
    tweets : Array<any> = [];
    xkey = 'y';
    ykeys = ['a'];
    labels = ['words'];
    data : Array<any> = [];
    private options: Object = {
        element: 'chart',
        ymax: 'auto',
        ymin: 'auto',
        resize: true,
        xkey: this.xkey,
        ykeys: this.ykeys,
        labels: this.labels,
        data: this.data
    };

    constructor(private _tweetService: TweetService) {

    }
    getSentiments() {
        this._tweetService.getSentiments(this.twitterHandle)
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