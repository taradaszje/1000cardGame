import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameTableService} from './game-table.service';
import {PlayerService} from '../../players/player.service';
import {DataStorageService} from '../../db-service/data-storage.service';
import {Subject} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {
  playersNames: string[] = [];
  gameRows: any[] = [];

  constructor(private playerService: PlayerService,
              private gameTableService: GameTableService,
              private dataStorageService: DataStorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.playerService.getPlayers().forEach((player) => {
      this.playersNames.push(player.name);
    });
    this.dataStorageService.getData();
    this.gameTableService.gameRowEmitter.subscribe(gameRow => {
      this.gameRows.push(gameRow);
      this.router.navigate(['/game/players/'+ this.getNextPlayerNumber()])
    });
    // this.gameTableService.gameBombEmitter.subscribe(gameBomb => {
    //   this.gameRows.push(gameBomb);
    // });
  }

  private getNextPlayerNumber(){
    return this.gameRows.length % this.playersNames.length;
  }
}

