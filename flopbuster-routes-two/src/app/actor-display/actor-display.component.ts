import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actor-display',
  templateUrl: './actor-display.component.html',
  styleUrls: ['./actor-display.component.css']
})
export class ActorDisplayComponent {

  @Input() actor: any;
  @Input() index: any;

  ngOnInit() {
    console.log(this.actor)
  }

  logActor(actor: any) {
    console.log(this.actor)
  }


}
