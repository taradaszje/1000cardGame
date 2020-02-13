import {Component, Input, OnInit} from '@angular/core';
import {PlayerService} from '../../players/player.service';
import {GameRowModel} from './game-row.model';

@Component({
  selector: 'app-game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.css']
})
export class GameRowComponent implements OnInit {
  @Input() gameRow: GameRowModel;

  constructor() {
  }

  ngOnInit() {
  }
}
