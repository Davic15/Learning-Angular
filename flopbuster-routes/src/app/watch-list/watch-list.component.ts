import { Component, OnInit } from '@angular/core';
import { WatchListService } from './watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent {
  watchList: any;

  constructor(private watchListService: WatchListService) {}

  ngOnInit() {
    this.getWatchList()
  }

  getWatchList() {
    this.watchList = this.watchListService.getWatchList()
  }

}
