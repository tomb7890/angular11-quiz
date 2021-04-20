import { Component, Input } from '@angular/core';
import { Model } from "./model";
import { QItem } from "./qitem.model";

import { QItemRepository } from "./qitem.repository";

@Component({
  selector: 'question-page',
  templateUrl: './question.component.html',
  styles: [""]}
          )

export class QuestionComponent  {
  @Input()  model: Model;
  name = 'QuestionComponent';

  constructor(private repository: QItemRepository) {
      this.model = new Model();

  }

  get qitems() : QItem[] {
    return this.repository.getQItems();
  }

  getCurrentItem(): QItem {
    return this.qitems[this.model.page-1];
  }

  getChoices(): string[] {
    return this.getCurrentItem().choices;
  }

  prevPage(): void {
    this.model.prevPage();
  }

  nextPage(): void {
    this.model.nextPage();
  }

}
