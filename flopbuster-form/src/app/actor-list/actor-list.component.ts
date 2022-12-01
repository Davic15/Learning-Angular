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
  sortby = "name"
  
  constructor(private actorListService: ActorListService) {
    
  }

  ngOnInit() {
    this.actorListService.getActorList()
    .subscribe(actors => {
      this.actors = actors;
      this.sortActors();
    })
  }

  sortActors() {
    if(this.sortby === 'name') {
      this.actors.sort((actor1: any, actor2: any) => {
        return actor1.name < actor2.name ? -1 : 1;
      })
    } else {
      this.actors.sort((actor1: any, actor2: any) => {
        return actor1.credits - actor2.credits;
      })
    }
  }

  editActor(actor: any, actorForm: any) {
    this.model = {...actor};
    this.resetForm(actorForm);
  }

  resetForm(actorForm: any) {
    actorForm.markAsPristine();
    actorForm.markAsUntouched();
  }

  updateActor(form: any) {
    if (form.valid) {
      let editedActor = this.actors.find((curActor: any) => curActor.id === this.model.id)

      editedActor.name = this.model.name;
      editedActor.movieTitle = this.model.movieTitle;
      editedActor.credits = this.model.credits;
      editedActor.hasOscar = this.model.hasOscar;
      editedActor.status = this.model.status;
    }
  }

  onSortChanged(){
    this.sortActors();
  }
}
