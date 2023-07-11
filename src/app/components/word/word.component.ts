import { Component, OnInit } from '@angular/core';
import { FidelService } from 'src/app/services/fidel.service';

@Component({
  selector: 'learn-amharic-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  constructor(private fidelService: FidelService) { }

  //placeholder values till it is being read from the data source.
  fidelat = [
    {fidel: 'ሀ', kalat: [{am: 'ሀብል', en: 'necklace'}, {am:'ሀገር', en: 'country'}, {am: 'ሀሰት', en: 'false'}]},
    {fidel: 'ለ', kalat: [{am: 'ለምለም', en: 'green'}, {am: 'ለገሰ', en: 'he donates'}]},
    {fidel: 'መ', kalat: [{am: 'መቀስ', en: "scissors"}, {am: 'መሰረት', en: 'base/foundation'}, {am:'ምግብ', en: 'food'}, {am:'ምሰሶ', en: 'pole'}, {am:'ምሳሌ', en: 'example'}, {am: 'ሚዛን', en: 'balance'}]}
  ];

  title = "Learn Amharic Today"
  selectedWords: any[];

  tiles = [
    // {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    // {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},

  ];
  ngOnInit(): void {
    this.fidelService.fidelData$.subscribe(fidel => {
      this.selectedWords = this.fidelat.find(f => f.fidel == fidel).kalat;
      this.tiles = this.selectedWords.map(word => {
        return {
          text: `${word.am} (${word.en})`,
          cols: 1,
          rows: 1,
          color: 'lightblue',
        }
      });
    })
  }
}
