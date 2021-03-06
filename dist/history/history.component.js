"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var tweet_service_1 = require("../shared/tweet.service");
var router_1 = require("@angular/router");
var HistoryComponent = (function () {
    function HistoryComponent(_tweetService, router) {
        var _this = this;
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
            .subscribe(function (response) {
            _this.loading = false;
            _this.history = response;
        });
    }
    HistoryComponent.prototype.onSelectTweet = function (tweet) {
        this.router.navigate(['/history', tweet._id]);
    };
    HistoryComponent.prototype.toggleTableView = function () {
        this.tableView = !this.tableView;
    };
    HistoryComponent.prototype.getDate = function (date) {
        return new Date(date);
    };
    HistoryComponent.prototype.deleteTweet = function (id, index) {
        var _this = this;
        this._tweetService.putTweets(id)
            .subscribe(function (response) { return _this.deleteId(index); }, function (err) { return _this.logError(err); });
    };
    HistoryComponent.prototype.deleteId = function (index) {
        this.history.splice(index, 1);
    };
    HistoryComponent.prototype.logError = function (err) {
        this.error = err._body.msg;
        console.error(err);
    };
    return HistoryComponent;
}());
HistoryComponent = __decorate([
    core_1.Component({
        selector: 'history',
        templateUrl: 'app/history/history.component.html',
        styleUrls: ['app/history/history.component.css'],
        providers: [tweet_service_1.TweetService]
    }),
    __metadata("design:paramtypes", [tweet_service_1.TweetService, router_1.Router])
], HistoryComponent);
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=history.component.js.map