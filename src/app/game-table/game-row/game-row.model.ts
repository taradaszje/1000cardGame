import {OnInit} from '@angular/core';

export class GameRowModel implements OnInit {
  public roundNumber: number;
  public playerScores: number[];

  constructor(roundNumber: number, playerScores: number[]) {
    this.roundNumber = roundNumber;
    this.playerScores = playerScores;
  }

  ngOnInit() {
  }
}
