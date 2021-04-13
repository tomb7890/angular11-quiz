import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { WelcomeComponent } from './welcome.component';
import { FinalComponent } from './final.component';


@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, QuestionComponent, FinalComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
