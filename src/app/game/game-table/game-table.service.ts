import {EventEmitter, Injectable} from '@angular/core';
import {PlayerService} from '../../players/player.service';

@Injectable({providedIn: 'root'})
export class GameTableService {

  gameRows: number[][] = [];
  gameRowEmitter = new EventEmitter<number[]>();
  playersNumber = 0;

  constructor(private playerService: PlayerService) {
    this.playersNumber = this.playerService.getPlayers().length;
  }

  processData(gameRow: number[]) {
    if (!gameRow.includes(1001)) {
      this.playerService.getPlayers().forEach((player, index) => {
        player.updatePlayerData(gameRow[index]);
      });
    const value = this.addNewRowToLastRow(gameRow);
      console.log('value' + value);
      this.gameRows.push(value);
      this.gameRowEmitter.emit(value);
    } else {
      this.gameRows.push(gameRow);
      this.gameRowEmitter.emit(gameRow);
    }
  }

  addNewRowToLastRow(databaseRow: number[]) {
    if (this.getGameRows().length === 0) {
      return databaseRow;
    }
    for (let i = 0; i < databaseRow.length; i++) {
      if (databaseRow[i] !== 1001) {
        databaseRow[i] += this.gameRows.slice(-1)[0][i]; // get last row and add scores
      }
    }
    return databaseRow;
  }

  getGameRows() {
    return this.gameRows.slice();
  }

}
