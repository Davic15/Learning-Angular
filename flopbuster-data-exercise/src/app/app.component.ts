import { Component } from '@angular/core';
import { WATCH_LIST } from './DATA';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster-data-exercise';
  watchList = WATCH_LIST
  endValue = 4;

  constructor(title: Title){
    title.setTitle(this.watchList.length.toString() + ' items');
  }

  showAllMovies() {
    this.endValue = this.watchList.length;
  }

  moveItemUp(idx: number) {
    let cur = this.watchList[idx];
    let swap = this.watchList[idx - 1];
    this.watchList[idx] = swap;
    this.watchList[idx - 1] = cur;
  }

  moveItemDown(idx: number) {
    let cur = this.watchList[idx];
    let swap = this.watchList[idx + 1];
    this.watchList[idx] = swap;
    this.watchList[idx + 1] = cur;
  }
}
