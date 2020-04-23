export class Player {
  public name: string;
  public image: string;
  public winNumber: number;
  public numberOfGames: number;
  public bestWonScoreGame: number;
  public bestLoseScoreGame: number;
  public actualCollectedScore = 0;
  public totalScore = 0;
  public isClicked = false;
  public color: string;

  constructor(name: string, image: string, winNumber: number, numberOfGames: number, bestWonScoreGame: number,
              bestLoseScoreGame: number) {
    this.name = name;
    this.image = image;
    this.winNumber = winNumber;
    this.numberOfGames = numberOfGames;
    this.bestWonScoreGame = bestWonScoreGame;
    this.bestLoseScoreGame = bestLoseScoreGame;
  }


  updatePlayerData(gameScore: number) {
    if (gameScore > this.bestWonScoreGame) {
      this.bestWonScoreGame = gameScore;
    } else if (gameScore < this.bestLoseScoreGame && gameScore < 0) {
      this.bestLoseScoreGame = gameScore;
    }
    console.log(gameScore);
    this.actualCollectedScore = gameScore;
    this.totalScore += gameScore;
    this.updateWinNumber();
  }

  updateWinNumber() {
    if (this.totalScore >= 1000) {
      this.winNumber++;
      this.numberOfGames++;
    }
  }
}
