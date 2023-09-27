import { Injectable } from '@angular/core';
import { Observable, catchError, from, map, of, throwError } from 'rxjs';
import { Experience } from '../interfaces/experience';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction} from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class ExperiencesService { 
  // private companyRef: AngularFirestoreDocument<Experiences>;
  private experiencesRef: AngularFirestoreCollection<Experience>;

  constructor(private db: AngularFirestore) {
    // this.experienceRef = this.db.doc<Experiences>('experiences/experience');
    this.experiencesRef = this.db.collection<Experience>('experience');
   }
  
  
  getExperiencesObservable(): Observable<Experience[]> {
    return this.experiencesRef.snapshotChanges()
      .pipe(
        map((items: DocumentChangeAction<Experience>[]): Experience[] => {
          return items.map((item: DocumentChangeAction<Experience>): Experience => {
            return {
              id: item.payload.doc.id,
              tittle: item.payload.doc.data().tittle,
              company: item.payload.doc.data().company,
              current: item.payload.doc.data().current,
              description: item.payload.doc.data().description,
              enddate: item.payload.doc.data().enddate,
              startdate: item.payload.doc.data().startdate,
            };
          });
        }),                           
        catchError(this.errorHandler) 
      );
  }

  getExperienceObservable(id: string): Observable<Experience | undefined> {
    console.log("this is the ID", id)
    return this.db.doc<Experience>(`experience/${id}`)
      .valueChanges()
      .pipe( 
        catchError(this.errorHandler) 
      );                              
  }


  saveExperience(experience: Experience) {
    return from(this.experiencesRef.add(experience))
      .pipe(
        catchError(error => {
          console.log('set', error);
          return of('Error');
        })
      );
  }

  editExperience(experience: Experience) {
    return this.experiencesRef.doc(experience.id).update(experience)
      .then(_ => console.log('Success on update'))
      .catch(error => console.log('update', error));
  }

  deleteExperience(id: string) {
    return this.experiencesRef.doc(id).delete()
      .then(_ => console.log('Success on delete'))
      .catch(error => console.log('delete', error));
  }

  private errorHandler(error: any) {
    console.log(error);
    return throwError(error);
  }

}
