import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Player} from '../player.model';

@Component({
  selector: 'app-player-choice',
  templateUrl: './player-choice.component.html',
  styleUrls: ['./player-choice.component.css'],
  animations: [
    trigger('clickedNotClicked', [
      state('notClicked', style({
        height: '150px',
        width: '150px',
        color: 'white',
        fontSize: '20px',
        border: '1px solid orangered'

      })),
      state('clicked', style({
        height: '250px',
        width: '250px',
        backgroundColor: '#0074D9',
        fontSize: '35px',
        border: '1px solid #001f3f'
      })),
      transition(':enter', []),
      transition('notClicked => clicked', [
        animate('1s')
      ]),
      transition('clicked => notClicked', [
        animate('1s')
      ]),
    ])
  ]
})
export class PlayerChoiceComponent implements OnInit {
  isClicked = true;
  @Input() player: Player;

  constructor() {
  }

  toggleIsClicked() {
    this.isClicked = !this.isClicked;
    this.player.isClicked = !this.player.isClicked;
  }

  ngOnInit() {
  }

}
