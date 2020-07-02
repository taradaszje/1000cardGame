import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayersViewComponent} from './players/players-view/players-view.component';
import {PlayerDetailsComponent} from './players/player-details/player-details.component';
import {PlayerViewComponent} from './players/players-view/player-view/player-view.component';
import {PlayersComponent} from './players/players.component';
import {HttpClientModule} from '@angular/common/http';
import {DataStorageService} from './db-service/data-storage.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {PlayerChoiceComponent} from './players/player-choice/player-choice.component';
import {StartGameComponent} from './start-game/start-game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GameTableComponent} from './game/game-table/game-table.component';
import {GameComponent} from './game/game.component';
import {GameTableService} from './game/game-table/game-table.service';
import {GameProgressComponent} from './game/game-table/game-progress/game-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    GameTableComponent,
    PlayersViewComponent,
    PlayerDetailsComponent,
    PlayerViewComponent,
    PlayersComponent,
    GameProgressComponent,
    PlayerChoiceComponent,
    StartGameComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [DataStorageService, GameTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
