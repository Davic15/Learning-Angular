import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';

@Component({
    selector: 'app-game-grid',
    templateUrl: './game-grid.component.html',
})
export class GameGridComponent {
    @Input() currentTeam: string = '';
    @Output() teamWon = new EventEmitter()

    constructor(private game: GameService) {}

    tileClass00 = '';
    tileClass01 = ''
    tileClass02 = '';
    tileClass10 = '';
    tileClass11 = '';
    tileClass12 = '';
    tileClass20 = '';
    tileClass21 = '';
    tileClass22 = '';

    selectedTile(x: number, y: number) {
        (this as any)['tileClass'+ x + y] = this.game.gridKey[x][y];
        this.game.countTile(this.game.gridKey[x][y])
        let result = this.game.checkForWinner(this.game.gridKey[x][y])
        if (result.win === true) {
            this.teamWon.emit(result.team)
        }
    }
}