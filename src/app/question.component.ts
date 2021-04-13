import { Component, Input } from '@angular/core';
import { Model } from "./model";
import { QItem } from "./model";

@Component({
  selector: 'question-page',
  templateUrl: './question.component.html',
  styles: [""]}
          )

export class QuestionComponent  {
  @Input()  model: Model;
  name = 'QuestionComponent';

  constructor() {
    this.model = new Model();
  }

  getCurrentItem(): QItem {
    return this.model.items[this.model.page-1];
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
