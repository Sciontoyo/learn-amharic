import { Component, OnInit } from '@angular/core';
import { Item } from '../utils/top-list/top-list.component';

@Component({
  selector: 'app-firafire',
  templateUrl: './firafire.component.html',
  styleUrls: ['./firafire.component.scss']
})

export class FirafireComponent implements OnInit {

  constructor() { }
  title: string = "ፍራፍሬ (Fruits)";
  selectedItem: Item | null = null;
  items: Item[] = [
    {
      am: 'ብርቱካን',
      en: 'Orange',
      image: 'https://cdn.pixabay.com/photo/2012/04/26/12/52/orange-42395_1280.png'
    },
    {
      am: 'ብርቱካን',
      en: 'Orange',
      image: 'https://cdn.pixabay.com/photo/2012/04/26/12/52/orange-42395_1280.png'
    },
    {
      am: 'ፓፓያ',
      en: 'Papaya',
      image: 'https://cdn.pixabay.com/photo/2015/12/23/13/00/papaya-1105438_1280.png'
    },
    {
      am: 'ሎሚ',
      en: 'Lime',
      image: 'https://cdn.pixabay.com/photo/2012/04/05/00/27/lime-25314_1280.png'
    },
    {
      am: 'ሮማን',
      en: 'Pomengranate',
      image: 'https://cdn.pixabay.com/photo/2018/03/25/11/43/pomegranate-3259161_1280.jpg'
    },
  ];

  handleSelection(item: Item) {
    this.selectedItem = item; 
  }

  ngOnInit(): void {
  }

}
