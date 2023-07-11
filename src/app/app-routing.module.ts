import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphabetsComponent } from './components/alphabets/alphabets.component';
import { FirafireComponent } from './components/firafire/firafire.component';
import { GamesComponent } from './components/games/games.component';
import { ImageToWordComponent } from './components/games/image-to-word/image-to-word.component';
import { WordToImageComponent } from './components/games/word-to-image/word-to-image.component';
import { ListComponent } from './components/utils/list/list.component';
import { WordComponent } from './components/word/word.component';

const routes: Routes = [
  {path: '', component: AlphabetsComponent},
  {path: 'words', component: WordComponent},
  {path: 'list', component: ListComponent},
  {path: 'fruits', component: FirafireComponent},
  {path: 'games', component: GamesComponent, children: [
    {
      path: 'word-to-image', component: WordToImageComponent
    },
    {
      path: 'image-to-word', component: ImageToWordComponent
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
