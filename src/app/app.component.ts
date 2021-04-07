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

  getChoices(): string[] {
    return this.model.items[0].choices;
  }

  getCurrentItem(): QItem {
    return this.model.items[0];
  }

  prevPage(): void {
  }

  nextPage(): void {
  }

}
