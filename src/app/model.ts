
export class Model{
  items:QItem[];

  _page = 0;

  constructor () {
    this.items = [
      new QItem(
        'Which is the largest country in the world by population?',
        ['India', 'USA', 'China', 'Russia'],
        'China' ),

      new QItem (
        'When did the second world war end?',
        ['1945', '1939', '1944', '1942' ],
        '1945' ),

      new QItem (
        'Which was the first country to issue paper currency?',
        ['USA', 'France', 'Italy', 'China'],
        'China' ),

      new QItem (
        'Which city hosted the 1996 Summer Olympics?',
        [ 'Atlanta', 'Sydney', 'Athens', 'Beijing' ],
        'Atlanta' ),

      new QItem (
        'Who invented telephone?',
        [ 'Albert Einstein', 'Alexander Graham Bell', 'Isaac Newton', 'Marie Curie'],
        'Alexander Graham Bell'  )
    ];

    this._page = 0;
  }


  score(): number {
    let temp = 0;
    let i = 0;
    for (i = 0 ; i < this.items.length; i++ ) {
      if ( this.items[i].answer === this.items[i].solution ){
        temp = temp + 1;
      }
    }
    return temp;
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


export class QItem {
  question;
  choices;
  solution;
  answer; // from user

  constructor (q:string,c:string[],s:string) {
    this.question = q;
    this.choices = c;
    this.solution = s;
    this.answer = "";
  }
}

