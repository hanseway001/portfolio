import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SearchComponent } from './components/search/search.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../environment';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceEditComponent } from './components/experience-edit/experience-edit.component';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SearchComponent,
    AboutMeComponent,
    PortfolioComponent,
    HomePageComponent,
    SkillsComponent,
    ExperiencesComponent,
    ExperienceEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
