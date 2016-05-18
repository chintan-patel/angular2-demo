import {Component} from 'angular2/core';
import {TweetService} from '../tweet.service';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HistoryComponent} from '../history/history.component';
import {SearchComponent} from '../search/search.component';

@Component({
    selector: 'main-view',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css'],
    providers: [TweetService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name: 'Search', component: SearchComponent},
    {path: '/history', name: 'History', component: HistoryComponent},
])
export class HomeComponent {}