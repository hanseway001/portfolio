import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { SearchComponent } from '../components/search/search.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { ExperiencesComponent } from '../components/experiences/experiences.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ExperienceEditComponent } from '../components/experience-edit/experience-edit.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "about", component: AboutMeComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "experiences", component: ExperiencesComponent},
  {path: "experience/:id", component: ExperienceEditComponent},
  {path: "search", component: SearchComponent},
  {path: "skills", component: SkillsComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
