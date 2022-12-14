import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Actors } from './types/Actors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-basic-angular-two';
  actors: any;
  actors$: any;


  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get('http://localhost:3000/actors')
    .subscribe((data: any) => {
      this.actors = data
    });

    this.actors$ = this.http.get('http://localhost:3000/actors')

  }
}
