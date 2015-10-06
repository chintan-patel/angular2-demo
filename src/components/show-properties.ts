/// <reference path="../typings/tsd.d.ts" />
import { Component, View, FORM_DIRECTIVES, bootstrap, NgFor} from 'angular2/angular2';
import { FriendsService } from './friends.service';
import {HTTP_BINDINGS, Http, BaseRequestOptions, RequestOptions} from 'angular2/http';

@Component({
    selector: 'display',
    bindings: [FriendsService]
})

@View({
    templateUrl: 'components/show-properties.html',
    directives: [NgFor, FORM_DIRECTIVES]
})

class DisplayComponent {
    public myname: string;
    names: Array<string>;

    constructor(friendsService: FriendsService) {
        friendsService.getUsers()
            .then((users) => {
                this.names = users;
            });

        //this.names  = friendsService.names;
    }

    addNames(name: string) {
        if(this.myname)
        {
            this.names.push(this.myname);
            this.myname = '';
        }
    }

    update(){
    }
}

bootstrap(DisplayComponent);
