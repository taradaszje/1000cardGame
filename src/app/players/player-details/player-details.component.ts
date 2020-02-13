import { Component, OnInit } from '@angular/core';
import {Player} from '../player.model';
import {PlayerService} from '../player.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  player: Player;
  id: number;
  constructor(private playerService: PlayerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.player = this.playerService.getPlayer(this.id);
    });
  }
  countWonPercentage() {
    return this.player.wonNumber / this.player.numberOfGames * 100;
  }
}
