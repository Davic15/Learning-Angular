import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActorDisplayComponent } from './actor-display/actor-display.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { WatchListItemComponent } from './watch-list-item/watch-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorViewComponent } from './actor-view.component'
import { WatchlistViewComponent } from './watch-list-view.component'

let routes = [
  { path: '**', redirectTo: 'actors'},
  { path: 'actors', component: ActorViewComponent },
  { path: 'watchlist', component: WatchlistViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ActorDisplayComponent,
    RentalListComponent,
    WatchListItemComponent,
    ActorViewComponent,
    WatchlistViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
