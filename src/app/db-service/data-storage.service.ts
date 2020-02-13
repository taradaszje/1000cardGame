import {HttpClient} from '@angular/common/http';
import {GameTableService} from '../game-table/game-table.service';
import {GameRowModel} from '../game-table/game-row/game-row.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private gameTableService: GameTableService) {

  }

  storeGameRows() {
    const gameRows = this.gameTableService.getGameRows();
    console.log(gameRows);
    this.http.put('https://thousandcardgame-de46d.firebaseio.com/gameRows.json', gameRows)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchGameRows() {
    return this.http.get<GameRowModel[]>('https://thousandcardgame-de46d.firebaseio.com/gameRows.json')
      .subscribe(gameRows => {
        this.gameTableService.setGameRows(gameRows);
      });
  }
}
