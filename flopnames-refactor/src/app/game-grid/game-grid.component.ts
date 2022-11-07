import { Component, Input, EventEmitter, Output } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent {
  @Input() currentTeam: string = '';
  @Output() teamWon = new EventEmitter();

  tileClass00 = "";
  tileClass01 = "";
  tileClass02 = "";
  tileClass10 = "";
  tileClass11 = "";
  tileClass12 = "";
  tileClass20 = "";
  tileClass21 = "";
  tileClass22 = "";
  constructor(private game: GameService) {}
  selectTile(x:number,y:number) {
    let className = this.game.gridKey[x][y];
    (this as any)['tileClass'+ x + y] = this.game.gridKey[x][y];
    this.game.countTile(className);
    if(this.game.checkForWinner(className, this.currentTeam)) {
      this.teamWon.emit(this.game.winner);
    }
  }

}
