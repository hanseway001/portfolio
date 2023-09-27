import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/interfaces/experience';
// import { Exp}
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit{

  public $experiences: Observable<Experience[]> | undefined;

  constructor(private experiencesService: ExperiencesService) {
  }

  ngOnInit() {
    console.log('looking for the ID', this.$experiences)
    this.getExperiences();
  }

  getExperiences() {
    console.log("experiences", this.$experiences)
    this.$experiences = this.experiencesService.getExperiencesObservable();
  }
}
