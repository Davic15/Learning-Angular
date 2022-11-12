import { Component } from '@angular/core';
import { FLOP_DATA, ACTORS, WATCH_LIST } from './FLOP_DATA';

@Component({
  selector: 'app-watch-list-view',
  template: `
  <div>
  <h4>Watch List</h4>

  <app-watch-list-item 
    *ngFor="let item of watchList; index as i; first as f; last as l"
    [item]="item"
    (delete)="deleteItem(item)"
  ></app-watch-list-item>

</div>
  
  `
})
export class WatchlistViewComponent  {
  watchList;
  constructor() {
    this.watchList = WATCH_LIST;
  }

  deleteItem(item: any) {
    console.log(item)
  }

}