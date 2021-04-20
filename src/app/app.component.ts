import { Component } from '@angular/core';

import { Model } from './model';
import { QItem } from './qitem.model';

import { QItemRepository } from "./qitem.repository";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular11-quiz';

  model: Model;

  constructor(private repository: QItemRepository) {
    this.model = new Model();
  }

  get qitems() : QItem[] {
    return this.repository.getQItems();
  }


  isWelcomePage() : boolean  {
    if (this.model.page === 0) {
      return true;
    }
    return false;
  }

  isQuestionPage(): boolean {
    if (this.model.page > 0 && this.model.page <= this.qitems.length ){
      return true;
    }
    else {
      return false;
    }
  }

  isResultsPage() : boolean  {
    if (this.model.page === this.qitems.length + 1) {
      return true;
    }
    return false;
  }

}
