import { Component } from '@angular/core';
import { TweetService } from '../../shared/tweet.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
declare let Morris: any;

@Component({
    selector: 'history-detail',
    templateUrl: 'app/history/history-details/history-details.component.html',
    styleUrls: ['app/history/history-details/history-details.component.css'],
    providers: [TweetService],
})

export class HistoryDetailComponent {
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

    constructor(private _tweetService: TweetService, private route: ActivatedRoute,
    private router: Router) {
        this.loading = true;
    }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let word = params['word']; // (+) converts string 'id' to a number
            this.getTweet(word);
        });
    }
    toggleTableView() {
        this.tableView = !this.tableView;
    }
    getDate(date: string) {
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

    createChartValues(data: Array<any>) {
        let values: Array<any> = [];
        for (let i = 0; i < data.length; i++) {
            let tmp = {
                y: i + 1,
                a: data[i].score
            };
            values.push(tmp);
        };
        return values;
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
