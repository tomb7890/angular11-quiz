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

  isWelcomePage() : boolean  {
    if (this.model.page === 0) {
      return true;
    }
    return false;
  }

  isQuestionPage(): boolean {
    if (this.model.page > 0 && this.model.page <= this.model.items.length ){
      return true;
    }
    else {
      return false;
    }
  }

  isResultsPage() : boolean  {
    if (this.model.page === this.model.items.length + 1) {
      return true;
    }
    return false;
  }

}
