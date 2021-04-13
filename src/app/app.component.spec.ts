import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';


import { QuestionComponent } from './question.component';
import { WelcomeComponent } from './welcome.component';
import { FinalComponent } from './final.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
          AppComponent, QuestionComponent, WelcomeComponent, FinalComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular11-quiz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular11-quiz');
  });

  it('should start with a welcome screen', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('H1').textContent).toContain('Welcome to the Angular Quiz App');
  });

  it('should have a "Start the Quiz" button on the welcome screen', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.start-button').textContent).toContain('Start the Quiz');
  });

  it('should show the first page of the quiz when the button is clicked ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const btn = fixture.debugElement.nativeElement.querySelector('.start-button');
    btn.click();
    fixture.detectChanges();
    expect(compiled.querySelector('.quiz-container').textContent).toContain('Which is the largest country in the world by population');
  });

});
