import {Component} from '@angular/core';
import {TweetService} from '../tweet.service';
import {} from 'ng2-charts/ng2-charts';
import { Router } from '@angular/router';
import {HistoryComponent} from '../history/history.component';
import {SearchComponent} from '../search/search.component';
import {HistoryDetailComponent} from '../history/history-details/index';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'main-view',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css'],
    providers: [TweetService]
})

export class HomeComponent {
    constructor(private router: Router) {
        console.log('HIHIHHI');
        console.log(router.url);
    }
}
