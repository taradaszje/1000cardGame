import {Component, NgZone, OnInit} from '@angular/core';
import {GameTableService} from './game-table.service';
import {PlayerService} from '../../players/player.service';
import {DataStorageService} from '../../db-service/data-storage.service';
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
              private router: Router,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    this.playerService.getPlayers().forEach((player) => {
      this.playersNames.push(player.name);
    });
    this.dataStorageService.getData();
    this.gameTableService.gameRowEmitter.subscribe(gameRow => {
      this.gameRows.push(gameRow);
      this.ngZone.run(() => this.router.navigate(['/game/players/' + this.getNextPlayerNumber()]));
      this.checkPlayersScore();
    });
  }

  private checkPlayersScore(){
    this.playerService.getPlayers().forEach(player => {
      if(player.totalScore > 999){
        this.dataStorageService.deleteGameRow();
      }
    })
  }

  private getNextPlayerNumber(){
    return this.gameRows.length % this.playersNames.length;
  }
}

