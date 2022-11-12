import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routingTable } from './routes';
import { FlopListComponent } from './flop-list/flop-list.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { WatchListComponent } from './watch-list/watch-list.component'

@NgModule({
  declarations: [
    AppComponent,
    FlopListComponent,
    RentalListComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routingTable)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
