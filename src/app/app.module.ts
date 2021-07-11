import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ResumeComponent} from './resume/resume.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SkillsComponent } from './skills/skills.component';
import { EmploymentComponent } from './employment/employment.component';
import { EducationComponent } from './education/education.component';
import {PdfJsViewerModule} from "ng2-pdfjs-viewer";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    SkillsComponent,
    EmploymentComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    PdfJsViewerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
