import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlphabetsComponent } from './components/alphabets/alphabets.component';
import { FidelComponent } from './components/fidel/fidel.component';
import { WordComponent } from './components/word/word.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ListComponent } from './components/utils/list/list.component';
import { FirafireComponent } from './components/firafire/firafire.component';
import { TopListComponent } from './components/utils/top-list/top-list.component';
import { GamesComponent } from './components/games/games.component';
import { WordToImageComponent } from './components/games/word-to-image/word-to-image.component';
import { ImageToWordComponent } from './components/games/image-to-word/image-to-word.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    FidelComponent,
    AlphabetsComponent,
    ListComponent,
    FirafireComponent,
    TopListComponent,
    GamesComponent,
    WordToImageComponent,
    ImageToWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
