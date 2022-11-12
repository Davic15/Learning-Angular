import { Component } from '@angular/core';
import { FLOP_DATA, ACTORS, WATCH_LIST } from './FLOP_DATA';

@Component({
  selector: 'app-actor-view',
  template: `
  
  <div>
  <h4>Actors</h4>
  <app-actor-display
      *ngFor="let actor of actors; index as i"
    [actor]="actor" 
    [index]="i"> 
    </app-actor-display>

  </div>
  `
})
export class ActorViewComponent  {
  actors;
  constructor() {
    this.actors = ACTORS;
  }

}