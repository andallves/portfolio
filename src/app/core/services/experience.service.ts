import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '@core/models/entities/trajectory';
import { experiencesData } from '@core/data/experiences';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private readonly experiences$ = new Observable<Experience[]>(sub => {
    setTimeout(() => {
      sub.next(experiencesData);
    }, 100);
  });

  get experiences(): Observable<Experience[]> {
    return this.experiences$;
  }
}
