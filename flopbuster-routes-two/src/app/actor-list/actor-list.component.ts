import { Component, OnInit } from '@angular/core';
import { ActorListService } from './actor-list.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors: any;
  constructor(private actorListService: ActorListService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams
    .subscribe(qps => {
      if(!!qps['sort']) {
        this.actorListService.getActorList()
        .subscribe(actors => {
          this.actors = actors.sort((a: { name: number; }, b: { name: number; }) => 
            a.name < b.name ? -1 : 1
          )
        })
      } else {
        this.actorListService.getActorList()
        .subscribe(actors => {
          this.actors = actors;
        })
      }
    })
  }

}
