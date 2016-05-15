import {Component} from 'angular2/core';
import {TweetService} from '../tweet.service';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {HistoryComponent} from './history-details/history.component'

@Component({
    selector: 'main-view',
    templateUrl: 'app/history/home.component.html',
    styleUrls: ['app/history/home.component.css'],
    directives: [HistoryComponent]
})

export class AppComponent {

}