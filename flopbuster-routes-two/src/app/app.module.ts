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
import { WatchlistViewComponent } from './watch-list-view.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { ActorListComponent } from './actor-list/actor-list.component'
import { NotFoundComponent } from './not-found/not-found.component';

let routes = [
  //{ path: '**', redirectTo: 'actors'},
  { path: 'actors', component: ActorListComponent },
  { path: 'actors/:id', component: ActorDetailsComponent },
  { path: 'watchlist', component: WatchlistViewComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ActorDisplayComponent,
    RentalListComponent,
    WatchListItemComponent,
    ActorViewComponent,
    WatchlistViewComponent,
    ActorDetailsComponent,
    ActorListComponent
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
