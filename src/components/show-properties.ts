/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import * as FriendsService from 'components/friends.service';

@Component({
    selector: 'display',
    bindings: [FriendsService]
})

@View({
    templateUrl: 'components/show-properties.html',
    directives: [NgFor]
})

class DisplayComponent {
    myName: string;
    names: Array<string>;

    constructor(friendsService: FriendsService) {
        this.myName = 'Alice';
        this.names  = friendsService.names;
    }

    addNames(name: string) {
        console.log(name);
        this.names.push(name);
    }

    update(){
    }
}

bootstrap(DisplayComponent);
