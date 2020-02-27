import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { GameTableComponent } from './game-table/game-table.component';
import { PlayersViewComponent } from './players/players-view/players-view.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayerViewComponent } from './players/players-view/player-view/player-view.component';
import { PlayersComponent } from './players/players.component';
import { GameRowComponent } from './game-table/game-row/game-row.component';
import { PlayerGameComponent } from './game-table/player-game/player-game.component';
import {HttpClientModule} from '@angular/common/http';
import {DataStorageService} from './db-service/data-storage.service';
import {GameTableService} from './game-table/game-table.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { PlayerChoiceComponent } from './players/player-choice/player-choice.component';
import { StartGameComponent } from './start-game/start-game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    GameTableComponent,
    PlayersViewComponent,
    PlayerDetailsComponent,
    PlayerViewComponent,
    PlayersComponent,
    GameRowComponent,
    PlayerGameComponent,
    PlayerChoiceComponent,
    StartGameComponent
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
