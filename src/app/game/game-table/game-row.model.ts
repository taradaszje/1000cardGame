import {OnInit} from '@angular/core';

export class GameRowModel implements OnInit {
  public playerScores: number[];

  constructor(playerScores: number[]) {
    this.playerScores = playerScores;
  }

  ngOnInit() {
  }

  getPlayerScore(index: number) {
    return this.playerScores[index];
  }
}
