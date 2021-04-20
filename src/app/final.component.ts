import { Component, Input } from '@angular/core';
import { Model } from './model';
import { QItem } from './qitem.model';


import { QItemRepository } from './qitem.repository';

@Component({
  selector: 'final-page',
  templateUrl: './final.component.html',
  styles: ['']})

export class FinalComponent  {
  @Input()  model: Model;
  name = 'FinalComponent';

  constructor(private repository: QItemRepository) {
    this.model = new Model();
  }

  playAgain() {
    this.model.playAgain();
  }

  getScore(): number {
    let temp = 0;
    let i = 0;

    const items = this.repository.getQItems();

    for (i = 0 ; i < items.length; i++ ) {
      if ( items[i].answer === items[i].solution ){
        temp = temp + 1;
      }
    }
    return temp;
  }

}

