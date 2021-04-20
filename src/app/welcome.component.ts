import { Component, Input } from '@angular/core';
import { Model } from './model';
import { QItem } from './qitem.model';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome.component.html',
  styles: ['']}
          )

export class WelcomeComponent  {
  @Input()  model: Model;
  name = 'WelcomeComponent';

  constructor() {
    this.model = new Model();
  }

  nextPage(): void {
    this.model.nextPage();
  }

}
