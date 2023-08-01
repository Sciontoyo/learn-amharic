import { Component, OnInit } from '@angular/core';
import { FidelService } from 'src/app/services/fidel.service';

export interface Fidel {
  char: String;
  order: Number;
};
@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.component.html',
  styleUrls: ['./alphabets.component.scss']
})
export class AlphabetsComponent implements OnInit {

  fidelFamily: Fidel[];
  constructor(private fidelService: FidelService) {
    this.fidelService.fidelData$.subscribe(fidel => {
      this.fidelFamily = this.alphabet.find(char => char.fidel == fidel).family;
    })
  }
  title: string = "Learn Fideloch"
  alphabet = [
    {
      fidel: 'አ',
      family: [
        {char: 'አ', order: 1},
        {char: 'ኡ', order: 2},
        {char: 'ኢ', order: 3},
        {char: 'ኣ', order: 4},
        {char: 'ኤ', order: 5},
        {char: 'እ', order: 6},
        {char: 'ኦ', order: 7},
      ]
    },
    {
      fidel: 'ለ',
      family: [
        {char: 'ለ', order: 1},
        {char: 'ሉ', order: 2},
        {char: 'ሊ', order: 3},
        {char: 'ላ', order: 4},
        {char: 'ሌ', order: 5},
        {char: 'ል', order: 6},
        {char: 'ሎ', order: 7},
      ]
    },
    {
      fidel: 'ሐ',
      family: [
        {char: 'ሐ', order: 1},
        {char: 'ሑ', order: 2},
        {char: 'ሒ', order: 3},
        {char: 'ሓ', order: 4},
        {char: 'ሔ', order: 5},
        {char: 'ሕ', order: 6},
        {char: 'ሖ', order: 7},
      ]
    },
    {
      fidel: 'መ',
      family: [
        {char: 'መ', order: 1},
        {char: 'ሙ', order: 2},
        {char: 'ሚ', order: 3},
        {char: 'ማ', order: 4},
        {char: 'ሜ', order: 5},
        {char: 'ም', order: 6},
        {char: 'ሞ', order: 7},
      ]
    },
  ];
  ngOnInit(): void {
  }

}
