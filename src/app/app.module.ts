import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { WelcomeComponent } from './welcome.component';
import { FinalComponent } from './final.component';
import { QItemRepository } from './qitem.repository';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static.datasource';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, WelcomeComponent, QuestionComponent, FinalComponent
  ],
  imports: [
    HttpClientModule, BrowserModule, FormsModule
  ],
  providers: [QItemRepository, StaticDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
