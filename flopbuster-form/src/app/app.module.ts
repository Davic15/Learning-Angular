import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routingTable } from './routes';
import { LoginComponent } from './login/login.component';
import { FlopListComponent } from './flop-list/flop-list.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { FlopSuggestionComponent } from './flop-suggestion/flop-suggestion.component';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FlopListComponent,
    RentalListComponent,
    ActorListComponent,
    FlopSuggestionComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, HttpClientModule,
    RouterModule.forRoot(routingTable),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
