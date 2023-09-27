import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Experience } from 'src/app/interfaces/experience';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.scss']
})
export class ExperienceEditComponent implements OnInit{
  
  $experience: Observable<Experience | undefined> | undefined;
  id: string | null | undefined;

  
  constructor(
    private experienceService: ExperiencesService,
    private activatedRoute: ActivatedRoute,
    private router: Router  ) {
      // if (!this.isNew) {
      //   console.log("experiences1", this.id)
      //   this.$experience = experienceService.getExperienceObservable(this.id);
      // } else {
      //   this.$experience = of(undefined);
      // }
  }

  ngOnInit(  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id && this.id !== 'new') {
      console.log("experiences1", this.id);
      this.$experience = this.experienceService.getExperienceObservable(this.id);
    } else {
      this.$experience = of({}) as Observable<Experience> ;
    }
  }
  

  saveExperience(experience: Experience) {
    this.experienceService.saveExperience(experience)
      .subscribe(() => this.router.navigate(['/experiences']));
  }

  editExperience(experience: Experience) {
    this.id ? experience.id = this.id: "";
    this.experienceService.editExperience(experience)
      .then(_ => this.router.navigate(['/experiences']));
  }

  deleteExperience() {
    // this.experienceService.deleteExperience(this.id)
    //   .then(_ => this.router.navigate(['/experiences/all']));
  }

  // get id(): string | null{
  //   return this.activatedRoute.snapshot.paramMap.get('id');
  // }

  get isNew(): boolean {
    return this.id === 'new';
  }
}
