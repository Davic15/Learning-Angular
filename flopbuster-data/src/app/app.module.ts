import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActorDisplayComponent } from './actor-display/actor-display.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalListComponent,
    MovieTileComponent,
    ActorDisplayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
