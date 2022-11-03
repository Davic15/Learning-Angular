import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopnames';
  keyDisplay = 'visibility: hidden';
  currentTeam = 'Red';
  teamTextClass = 'redtext';
  winningMessage = '';

  setRedTeam() {
    this.currentTeam = 'Red';
    this.teamTextClass = 'redtext';
  }

  setBlueTeam() {
    this.currentTeam = 'Blue';
    this.teamTextClass = 'bluetext';
  }

  toggleKey() {
    if (this.keyDisplay === '') {
      this.keyDisplay = 'visibility: hidden';
    } else {
      this.keyDisplay = '';
    }
  }

  displayWinner(team: string) {
    this.winningMessage = team + ' won!';
  }
}
