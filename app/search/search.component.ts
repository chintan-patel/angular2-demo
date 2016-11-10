import { Component } from '@angular/core';
import { TweetService } from '../shared/tweet.service';
declare let Morris: any;

@Component({
    selector: 'search',
    templateUrl: 'app/search/search.component.html',
    styleUrls: ['app/search/search.component.css'],
    providers: [TweetService]
})

export class SearchComponent {
    chart;
    history: Array<any> = [];
    twitterHandle: string = '';
    analysis: Object = {};
    tweets: Array<any> = [];
    xkey = 'y';
    ykeys = ['a'];
    labels = ['words'];
    data: Array<any> = [];
    Morris: any = Morris;
    private options: any = {
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
            this.chart = this.Morris.Line(this.options);
        }

    }
    createChartValues(data) {
        let values = [];
        for (let i = 0; i < data.length; i++) {
            let tmp = {
                y: i + 1,
                a: data[i].score
            };
            values.push(tmp);
        };
        return values;
    }
}
