import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieRentalComponent } from './movie-rental/movie-rental.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieTileComponent,
    MovieRentalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
