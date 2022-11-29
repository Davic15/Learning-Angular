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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FlopListComponent,
    RentalListComponent
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
