import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster-example';
  selectedIndex: number = -1;

  OnVoteClick(index: number) {
    if (this.isSelected(index)) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }

  isSelected(index: number) {
    return this.selectedIndex === index;
  }

  anySelected() {
    return this.selectedIndex !== -1;
  }

  getButtonText(index: number) {
    if(this.isSelected(index)) {
      return 'Unvote';
    } else {
      return 'Vote'
    }
  }

}
