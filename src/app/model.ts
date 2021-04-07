export class Model{
  _page = 0;

  nextPage(): void {
    this._page = this._page + 1;
  }

  get page(): number {
    return this._page;
  }
}
