import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routingTable } from './routes';
//import { WatchListComponent } from './watch/watch-list/watch-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlopListComponent } from './flop-list/flop-list.component'
import { RentalListComponent } from './rental-list/rental-list.component';
import { FlopSuggestionComponent } from './flop-suggestion/flop-suggestion.component';
import { LoginComponent } from './login/login.component';
import { FlopDetailsComponent } from './flop-details/flop-details.component';
//import { ActorListComponent } from './actors/actor-list/actor-list.component';

//import { ActorsModule } from './actors/actors.module';
import { AuthorsModule } from './authors/authors.module';
import { AdminModule } from './admin/admin.module';
//import { WatchModule } from './watch/watch.module';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [
    AppComponent,
    //WatchListComponent,
    NotFoundComponent,
    FlopListComponent,
    RentalListComponent,
    FlopSuggestionComponent,
    LoginComponent,
    FlopDetailsComponent,
    //ActorListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule, HttpClientModule,
    //ActorsModule,
    RouterModule.forRoot(routingTable),
    AuthorsModule, 
    //WatchModule,
    AdminModule,
    SecurityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
