import { Component, OnInit } from '@angular/core';
import { ActorListService } from '../actor-list/actor-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent {
  actor: any;
  constructor(private actorListService: ActorListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe((params: any) => {
      this.actorListService.getActor(+params.get('id'))
      .subscribe(actor => {
        console.log(actor);
        this.actor = actor;
      })
    })
  }

}
