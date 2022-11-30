import { Component } from '@angular/core';
import { ActorListService } from './actor-list.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent {
  actors: any;
  model: any = {};
  
  constructor(private actorListService: ActorListService) {
    
  }

  ngOnInit() {
    this.actorListService.getActorList()
    .subscribe(actors => {
      this.actors = actors;
    })
  }

  editActor(actor: any) {
    this.model = {...actor};
  }

  updateActor() {
    let editedActor = this.actors.find((curActor: any) => curActor.id === this.model.id)

    editedActor.name = this.model.name;
    editedActor.movieTitle = this.model.movieTitle;
    editedActor.credits = this.model.credits;
  }
}
