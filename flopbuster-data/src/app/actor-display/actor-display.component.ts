import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actor-display',
  templateUrl: './actor-display.component.html',
  styleUrls: ['./actor-display.component.css']
})
export class ActorDisplayComponent implements OnInit {
  @Input() actor: any;
  @Input() index: any;
  @Input() even: any;
  @Output() favoriteActor = new EventEmitter();

  selected = false;

  constructor() { }

  ngOnInit(): void {
  }

  logActor(actor: any) {
    console.log(this.actor.name)
    this.favoriteActor.emit(this.actor.name)
  }

  onClick() {
    this.selected = true;
  }
}
