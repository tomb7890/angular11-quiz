export class Model{
  _page = 0;

  nextPage() {
    this._page = this._page + 1;
  }

  get page() {
    return this._page;
  }
}
