import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: '<h1 id="output">My Second Angular 2 App</h1><display></display>'
})
class AppComponent { }

bootstrap(AppComponent);