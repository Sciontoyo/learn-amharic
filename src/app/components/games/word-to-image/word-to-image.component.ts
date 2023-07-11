import { Component, Input, OnInit } from '@angular/core';
import { randomizeArray } from '../../utils/utils';

export interface MatchImage {
  id: number;
  contentInAm: String;
  contentInEn: String;
  contentImage: String;
  randomImages: String[];
  randomWords: String[];
  played: boolean;
};

export enum SELECTION_TYPE {
  IMAGE = 'image',
  WORD = 'word'
}

@Component({
  selector: 'learn-amharic-word-to-image-game',
  templateUrl: './word-to-image.component.html',
  styleUrls: ['./word-to-image.component.scss']
})
export class WordToImageComponent implements OnInit {

  @Input()
  selectBy: String = SELECTION_TYPE.IMAGE;
  currentPlay: MatchImage = null;
  score: number = 0;
  matchItems: MatchImage[] = [
    {
      id: 1,
      contentInAm: "ዉሻ",
      contentInEn: "Dog",
      contentImage: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      randomImages: [
        "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/13/22/25/bird-1905255_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/04/09/16/46/lamb-2216160_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/21/16/59/animal-1846462_1280.jpg"
      ],
      randomWords: [
        "ዉሻ",
        "ድመት",
        "ወንበር",
        "ብርቱካን",
        "አበባ"
      ],
      played: false
    },
    {
      id: 2,
      contentInAm: "ድመት",
      contentInEn: "Cat",
      contentImage: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
      randomImages: [
        "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/13/22/25/bird-1905255_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/04/09/16/46/lamb-2216160_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/21/16/59/animal-1846462_1280.jpg"
      ],
      randomWords: [
        "ዉሻ",
        "ድመት",
        "ወንበር",
        "ብርቱካን",
        "አበባ"
      ],
      played: false
    },
    {
      id: 3,
      contentInAm: "ወንበር",
      contentInEn: "chair",
      contentImage: "https://cdn.pixabay.com/photo/2013/07/12/11/50/chair-144914_1280.png",
      randomImages: [
        "https://cdn.pixabay.com/photo/2013/07/12/11/50/chair-144914_1280.png",
        "https://cdn.pixabay.com/photo/2016/05/12/23/03/lamb-1388937_1280.png",
        "https://cdn.pixabay.com/photo/2013/07/13/01/24/bunny-155674_1280.png",
        "https://cdn.pixabay.com/photo/2016/03/31/23/36/cartoon-1297713_1280.png"
      ],
      randomWords: [
        "ዉሻ",
        "ድመት",
        "ወንበር",
        "ብርቱካን",
        "አበባ"
      ],
      played: false
    },
    {
      id: 4,
      contentInAm: "ብርቱካን",
      contentInEn: "Orange",
      contentImage: "https://cdn.pixabay.com/photo/2018/02/24/10/03/orange-3177693_1280.png",
      randomImages: [
        "https://cdn.pixabay.com/photo/2018/02/24/10/03/orange-3177693_1280.png",
        "https://cdn.pixabay.com/photo/2017/01/31/22/29/cartoon-2027746_1280.png",
        "https://cdn.pixabay.com/photo/2016/03/31/21/24/cartoon-1296405_1280.png",
        "https://cdn.pixabay.com/photo/2016/11/21/16/59/animal-1846462_1280.jpg"
      ],
      randomWords: [
        "ዉሻ",
        "ድመት",
        "ወንበር",
        "ብርቱካን",
        "አበባ"
      ],
      played: false
    },
    {
      id: 5,
      contentInAm: "አበባ",
      contentInEn: "Flower",
      contentImage: "https://cdn.pixabay.com/photo/2017/08/24/07/40/annotation-2675672_1280.png",
      randomImages: [
        "https://cdn.pixabay.com/photo/2017/08/24/07/40/annotation-2675672_1280.png",
        "https://cdn.pixabay.com/photo/2017/06/26/20/57/dog-house-2445200_1280.png",
        "https://cdn.pixabay.com/photo/2017/04/09/16/46/lamb-2216160_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/21/16/59/animal-1846462_1280.jpg"
      ],
      randomWords: [
        "ዉሻ",
        "ድመት",
        "ወንበር",
        "ብርቱካን",
        "አበባ"
      ],
      played: false
    },
    {
      id: 6,
      contentInAm: "ቤት",
      contentInEn: "House",
      contentImage: "https://cdn.pixabay.com/photo/2018/02/20/12/19/house-3167502_1280.png",
      randomImages: [
        "https://cdn.pixabay.com/photo/2018/02/20/12/19/house-3167502_1280.png",
        "https://cdn.pixabay.com/photo/2016/12/13/22/25/bird-1905255_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/04/09/16/46/lamb-2216160_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/21/16/59/animal-1846462_1280.jpg"
      ],
      randomWords: [
        "ዉሻ",
        "ድመት",
        "ወንበር",
        "ብርቱካን",
        "አበባ",
        "ቤት"
      ],
      played: false
    }
  ];

  /**
   * Image click handler for the selected image
   * @param imageSrc String
   */
  itemClickHandler(item: string) {
    console.log(item);
    const selection = this.selectBy == SELECTION_TYPE.IMAGE 
    ? 'contentImage' 
    : 'contentInAm';
    console.log(this.currentPlay[selection])
    if (this.currentPlay[selection] == item) this.score+=10;
    this.matchItems.find(image => image.id == this.currentPlay.id).played=true;
    this.getRandomPlay();
  }

  getRandomPlay() {
    this.currentPlay = this.matchItems.find(item => !item.played);
    const selection = this.selectBy == SELECTION_TYPE.IMAGE 
      ? 'randomImages' 
      : 'randomWords';
    if (this.currentPlay) 
      this.currentPlay[selection] = randomizeArray(
        this.currentPlay[selection]
        );
  }

  ngOnInit(): void {
    this.getRandomPlay();
  }

}
