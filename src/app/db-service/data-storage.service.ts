import {Injectable} from '@angular/core';
import {GameRowModel} from '../game-table/game-row/game-row.model';
import {AngularFireDatabase} from '@angular/fire/database';
import {Subject} from 'rxjs';
import {GameTableService} from '../game-table/game-table.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private db: AngularFireDatabase, private gameTableService: GameTableService) {
  }

  getData() {
    this.db.database.ref('gameRows').on('value', snapshot => {
      this.gameTableService.processData(snapshot.val());
      console.log(snapshot.val());
    });
  }
}

