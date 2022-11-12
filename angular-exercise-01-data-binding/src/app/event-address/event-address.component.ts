import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../Event';

@Component({
  selector: 'app-event-address',
  templateUrl: './event-address.component.html',
  styleUrls: ['./event-address.component.css']
})
export class EventAddressComponent implements OnInit {
  //@Input() location = {} as Event;
  @Input() location = {} as Event;
  constructor() {
    console.log(this.location)
  }

  ngOnInit(): void {
  }

}
