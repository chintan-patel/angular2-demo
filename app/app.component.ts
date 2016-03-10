import {Component} from 'angular2/core';
import {TweetService} from './tweet.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';


interface Tweet {
    id: number;
    name: string;
}
interface Hero {
    id: number;
    name: string;
}
@Component({
    selector: 'main-view',
    templateUrl: 'app/hero.html',
    styleUrls: ['app/hero.css'],
    providers: [TweetService, HTTP_PROVIDERS]

})
export class AppComponent {
    title = 'Social Sentiment Analyzer';
    heroes = HEROES;
    selectedHero: Hero;
    twitterHandle = '#trump';
    public tweets: Array<any>;
    public analysis: any;
    public xkey = 'y';
    public ykeys = ["a"];
    public labels = ["Comments"];
    public colors = ["#feb155"];

    constructor(private _tweetService: TweetService) {

    }
    getTweet() {
        this._tweetService.getTweets()
            .subscribe(results => {
                this.analysis = this.createChartValues(results);
                this.tweets = results;
                new Morris.Line({
                    // ID of the element in which to draw the chart.
                    element: 'chart',
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    data: this.analysis,
                    // The name of the data record attribute that contains x-values.
                    xkey: this.xkey,
                    // A list of names of data record attributes that contain y-values.
                    ykeys: this.ykeys,
                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: this.labels
                });
            });
    }
    createChartValues(data) {
        var values = [];
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var tmp = {
                y: i + 1,
                a: (data[i].score > 0) ? data[i].score : 0
            };
            values.push(tmp);
        };
        console.log(values);
        return values;
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }
}
var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];