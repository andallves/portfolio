import { Injectable } from '@angular/core';
import { ProjectCard } from '#core/models/entities/project-card';
import { projects } from '#core/data/projects-info';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects$ = new Observable<ProjectCard[]>(sub => {
    setTimeout(() => {
      sub.next(projects);
    }, 2000);
  });
  private filteredProjects$: Subject<ProjectCard[]> = new Subject<
    ProjectCard[]
  >();

  getProjects(): Observable<ProjectCard[]> {
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
