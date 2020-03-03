import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../../players/player.model';

@Component({
  selector: 'app-game-progress',
  templateUrl: './game-progress.component.html',
  styleUrls: ['./game-progress.component.css']
})
export class GameProgressComponent implements OnInit {
  @Input() player: Player;
  constructor() { }

  ngOnInit() {
  }
}
