import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {GameTableService} from '../game/game-table/game-table.service';
import {PlayerService} from "../players/player.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private db: AngularFireDatabase, private gameTableService: GameTableService, private playerService: PlayerService) {
  }

  getData() {
    this.db.database.ref('gameRow').on('value', snapshot => {
      this.gameTableService.processData(snapshot.val());
    });
  }
  // works perfectly!
  deleteGameRow() {
    this.db.database.ref('gameRow').remove().then(() => console.log('Data has been removed. Bye'))
  }

  postPlayers() {
    this.db.database.ref('players').set(this.playerService.getPlayers()).then(() => console.log("Data saved/updated."));
  }
}

