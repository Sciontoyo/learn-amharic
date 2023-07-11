import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'learn-amharic-util-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input()
  tiles
  @Input()
  cols: number;

  ngOnInit(): void {
  }

}
