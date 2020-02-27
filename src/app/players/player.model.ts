export class Player {
  public name: string;
  public image: string;
  public wonNumber: number;
  public numberOfGames: number;
  public bestWonScoreGame: number;
  public bestLoseScoreGame: number;
  public actualCollectedScore = 0;
  public totalScore = 0;
  public isClicked = false;
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


  updatePlayerData(gameScore: number) {
    if ( gameScore > this.bestWonScoreGame ) {
      this.bestWonScoreGame = gameScore;
    } else if (gameScore < this.bestLoseScoreGame && gameScore < 0) {
      this.bestLoseScoreGame = gameScore;
    }
    this.actualCollectedScore = gameScore;
    this.totalScore += gameScore;
  }
}
