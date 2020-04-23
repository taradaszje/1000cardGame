import {EventEmitter, Injectable} from '@angular/core';
import {PlayerService} from '../../players/player.service';

@Injectable({providedIn: 'root'})
export class GameTableService {

  gameRows: number[][] = [];
  gameRowEmitter = new EventEmitter<number[]>();
  playersNumber = 0;
  // gameBombs: number[][] = [];
  // gameBombEmitter = new EventEmitter<number[]>();

  constructor(private playerService: PlayerService) {
    this.playersNumber = this.playerService.getPlayers().length;
  }

  processData(gameRow: number[]) {
    if (!gameRow.includes(1000)) {
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
      // this.gameBombs.push(gameRow);
      // this.gameBombEmitter.emit(gameRow);
    }
  }

  addNewRowToLastRow(databaseRow: number[]) {
    console.log(databaseRow);
    const newDatabaseRow = [0];  // needed to not override upcoming data (databaseRow)
    if (this.getGameRows().length === 0) {
      return databaseRow;
    }
    for (let i = 0; i < databaseRow.length; i++) {
      if (databaseRow[i] !== 1000) {
        databaseRow[i] += this.gameRows.slice(-1)[0][i]; // get last row and add scores
      }
    }
    console.log('database row' + databaseRow);
    return databaseRow;
  }

  getGameRows() {
    return this.gameRows.slice();
  }
  //temporary!!
  deleteData() {

  }

}
