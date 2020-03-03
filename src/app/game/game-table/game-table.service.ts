import {GameRowModel} from './game-row.model';
import {Injectable} from '@angular/core';
import {PlayerService} from '../../players/player.service';

@Injectable({providedIn: 'root'})
export class GameTableService {
  gameRows: GameRowModel[] = [];

  constructor(private playerService: PlayerService) {
  }

  processData(gameRow: GameRowModel) {
    this.playerService.getPlayers().forEach((player, index) => {
      player.updatePlayerData(gameRow.playerScores[index]);
    });
    this.gameRows.push(this.addRow(gameRow));
  }

  addRow(databaseRow: GameRowModel) {
    if (this.getGameRows().length === 0) {
      return databaseRow;
    }
    for (let i = 0; i < databaseRow.playerScores.length; i++) {
      databaseRow.playerScores[i] += this.gameRows.slice(-1)[0].playerScores[i]; // get last row and add scores
    }
    return databaseRow;
  }

  getGameRows() {
    return this.gameRows.slice();
  }

  setGameRows(gameRows: GameRowModel[]) {
    this.gameRows = gameRows;
  }

}
