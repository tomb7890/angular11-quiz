import { Component } from '@angular/core';

import { Model } from './model';
import { QItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular11-quiz';

  model = new Model();

  getCurrentItem(): QItem {
    return this.model.items[this.model.page];
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
