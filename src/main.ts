import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withViewTransitions} from '@angular/router';

import {AppComponent} from './app/app.component';
import {HomeComponent} from './app/home/home.component';
import {ResumeComponent} from './app/resume/resume.component';
import {SkillsComponent} from './app/skills/skills.component';
import {EmploymentComponent} from './app/employment/employment.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {path: 'home', component: HomeComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'employment', component: EmploymentComponent},
      {path: 'resume', component: ResumeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ], withViewTransitions())
  ]
}).catch((err: unknown) => console.error(err));