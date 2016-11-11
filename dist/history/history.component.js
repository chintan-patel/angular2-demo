var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TweetService } from '../shared/tweet.service';
import { Router } from '@angular/router';
let HistoryComponent = class HistoryComponent {
    constructor(_tweetService, router) {
        this._tweetService = _tweetService;
        this.router = router;
        this.xkey = 'y';
        this.ykeys = ['a'];
        this.labels = ['words'];
        this.colors = ['#feb155', 'red', 'blue', 'green'];
        this.history = [];
        this.tableView = false;
        this.options = {
            element: 'chart',
            ymax: 'auto',
            ymin: 'auto',
            data: [],
            resize: true,
            xkey: this.xkey,
            ykeys: this.ykeys,
            labels: this.labels
        };
        this.loading = false;
        this.loading = true;
        this._tweetService.getHistory()
            .subscribe(response => {
            this.loading = false;
            this.history = response;
        });
    }
    onSelectTweet(tweet) {
        this.router.navigate(['/history', tweet._id]);
    }
    toggleTableView() {
        this.tableView = !this.tableView;
    }
    getDate(date) {
        return new Date(date);
    }
    deleteTweet(id, index) {
        this._tweetService.putTweets(id)
            .subscribe(response => this.deleteId(index), err => this.logError(err));
    }
    deleteId(index) {
        this.history.splice(index, 1);
    }
    logError(err) {
        this.error = err._body.msg;
        console.error(err);
    }
};
HistoryComponent = __decorate([
    Component({
        selector: 'history',
        templateUrl: 'app/history/history.component.html',
        styleUrls: ['app/history/history.component.css'],
        providers: [TweetService]
    }),
    __metadata("design:paramtypes", [TweetService, Router])
], HistoryComponent);
export { HistoryComponent };
//# sourceMappingURL=history.component.js.map