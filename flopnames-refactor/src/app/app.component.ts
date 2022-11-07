import { Component } from '@angular/core';
import{ Title } from '@angular/platform-browser';
import { GameService } from './game.service';
import { Team } from './models/Team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyVisibility = "hidden";
  winningMessage = "";

  ngOnInit() {}

  constructor(private title: Title, public game: GameService) {
    this.title.setTitle('Flopnames')
  }

  displayWinner(team: Team) {
    this.winningMessage = team.displayName + ' won!';
    this.title.setTitle('Flopnames - ' + team.displayName + ' won!');
  }

  setRedTeam() {
    this.game.currentTeam = this.game.redTeam;
  }

  setBlueTeam() {
    this.game.currentTeam = this.game.blueTeam;
  }

  toggleKey() {
    if(this.keyVisibility === "hidden") {
      this.keyVisibility = "visible";
    } else {
      this.keyVisibility = "hidden";
    }
  }
}
