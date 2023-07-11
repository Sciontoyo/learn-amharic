import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface Item {
  am: String;
  en: String;
  image: String;
}
@Component({
  selector: 'learn-amharic-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss']
})
export class TopListComponent implements OnInit {

  @Input()
  items: Item[];

  @Input()
  title: String;

  @Output()
  selectedItem = new EventEmitter<Item>();

  itemClickHandler(item: Item) {
    this.selectedItem.emit(item);
  }
  ngOnInit(): void {
  }
}
