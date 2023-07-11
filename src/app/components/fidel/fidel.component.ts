import { Component, Input, OnInit } from '@angular/core';
import { FidelService } from 'src/app/services/fidel.service';

@Component({
  selector: 'learn-amharic-fidel',
  templateUrl: './fidel.component.html',
  styleUrls: ['./fidel.component.scss']
})
export class FidelComponent implements OnInit {

  @Input()
  fidel: string;
  constructor(private fidelService: FidelService) { }

  fidelClickHandler(fidel: string) {
    this.fidelService.setFidel(fidel);
  }

  handleFidelSelection(fidel: string) {
    this.fidelService.setFidel(fidel);
  }
  ngOnInit(): void {
  }

}
