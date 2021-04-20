export class Model{
  _page = 0;

  constructor () {
    this._page = 0;
  }

  playAgain() {
    this._page = 1;
  }

  nextPage(): void {
    this._page = this._page + 1;
  }

  prevPage(): void {
    this._page = this._page - 1;
  }

  get page(): number {
    return this._page;
  }

}


