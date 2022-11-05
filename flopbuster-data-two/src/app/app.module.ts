import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RentalListComponent } from './rental-list/rental-list.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { IconCatComponent } from './movie-icons/icon-cat/icon-cat.component';
import { IconShipComponent } from './movie-icons/icon-ship/icon-ship.component';
import { IconSpiderComponent } from './movie-icons/icon-spider/icon-spider.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalListComponent,
    MovieTileComponent,
    IconCatComponent,
    IconShipComponent,
    IconSpiderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
