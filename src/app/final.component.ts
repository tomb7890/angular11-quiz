import { Component, Input } from '@angular/core';
import { Model } from './model';
import { QItem } from './model';

@Component({
  selector: 'final-page',
  templateUrl: './final.component.html',
  styles: ['']}
          )

export class FinalComponent  {
  @Input()  model: Model;
  name = 'FinalComponent';

  constructor() {
    this.model = new Model();
  }

  playAgain() {
    this.model.playAgain();
  }

  getScore(): number {
    return this.model.score();
  }

}

