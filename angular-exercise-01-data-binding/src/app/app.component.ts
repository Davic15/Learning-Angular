import { Component } from '@angular/core';
import { Event } from './Event';
import { EVENT_DATA } from './EVENT_DATA';
import { EVENT_DATA_ARRAY } from './EVENT_DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  event = {} as Event;
  eventArray: Event[];
  constructor() {
    this.event = EVENT_DATA;
    this.eventArray = EVENT_DATA_ARRAY
    console.log(this.event.location)
    
  }
}
