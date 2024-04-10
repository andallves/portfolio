import { Injectable } from '@angular/core';
import { CardProject } from '#core/models/entities/card-project';
import { projects } from '#core/data/projects-info';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects$ = new Observable<CardProject[]>(sub => {
    setTimeout(() => {
      sub.next(projects);
    }, 2000);
  });
  private filteredProjects$: Subject<CardProject[]> = new Subject<
    CardProject[]
  >();

  getProjects(): Observable<CardProject[]> {
    return this.projects$;
  }

  filteredProjects(filterStack: string) {
    this.projects$.subscribe({
      next: projects => {
        this.filteredProjects$.next(
          projects.filter(
            project =>
              project.stack == filterStack || project.stack == 'fullstack'
          )
        );
      },
    });

    return this.filteredProjects$.asObservable();
  }
}
