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

