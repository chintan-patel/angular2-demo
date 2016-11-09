import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import { HistoryDetailComponent } from './history/history-details/history-details.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'history/:word',
        component: HistoryDetailComponent
      }
    ])],
  declarations: [HomeComponent, SearchComponent, HistoryComponent, HistoryDetailComponent],
  bootstrap: [HomeComponent],
})
export class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
