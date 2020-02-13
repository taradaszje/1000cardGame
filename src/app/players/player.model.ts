export class Player {
  public name: string;
  public image: string;
  public wonNumber: number;
  public numberOfGames: number;
  public bestWonScoreGame: number;
  public bestLoseScoreGame: number;
  public actualCollectedScore = 0;
  public totalScore = 0;
  public color: string;

  constructor(name: string, image: string, wonNumber: number, numberOfGames: number, bestWonScoreGame: number,
              bestLoseScoreGame: number) {
    this.name = name;
    this.image = image;
    this.wonNumber = wonNumber;
    this.numberOfGames = numberOfGames;
    this.bestWonScoreGame = bestWonScoreGame;
    this.bestLoseScoreGame = bestLoseScoreGame;
  }


  updatePlayerData(gameScore: string) {
    const numberScore = Number(gameScore);
    if ( numberScore > this.bestWonScoreGame ) {
      this.bestWonScoreGame = numberScore;
    } else if (numberScore < this.bestLoseScoreGame) {
      this.bestLoseScoreGame = numberScore;
    }
    this.actualCollectedScore = numberScore;
    this.totalScore += numberScore;
  }
}
