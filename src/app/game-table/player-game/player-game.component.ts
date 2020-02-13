import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../players/player.model';
import {PlayerService} from '../../players/player.service';

@Component({
  selector: 'app-player-game',
  templateUrl: './player-game.component.html',
  styleUrls: ['./player-game.component.css']
})
export class PlayerGameComponent implements OnInit {
  @Input() player: Player;
  scores: number[] = [];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }
// todo on mobile devices allow only numeric screen
}
