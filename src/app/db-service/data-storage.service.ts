import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {GameTableService} from '../game/game-table/game-table.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private db: AngularFireDatabase, private gameTableService: GameTableService) {
  }

  getData() {
    this.db.database.ref('gameRows').on('value', snapshot => {
      console.log(snapshot.val());
      this.gameTableService.processData(snapshot.val());
    });
  }

  postPlayers() {
  }
}

