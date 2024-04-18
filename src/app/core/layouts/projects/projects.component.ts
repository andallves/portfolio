import { Component, inject, OnInit } from '@angular/core';
import { Icon } from '#core/models/entities/icon';
import { CardProject } from '#core/models/entities/card-project';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { ButtonDefaultComponent } from '#shared/components/button-default/button-default.component';
import { HeadingComponent } from '#shared/components/heading/heading.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProjectService } from '#core/services/project.service';
import { ButtonSecondaryComponent } from '#shared/components/button-secondary/button-secondary.component';
import { LoadingComponent } from '#shared/components/loading/loading.component';
import {
  backendIcon,
  frontendIcon,
  fullstackIcon,
  projectIcon,
} from '#core/data/icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CustomTextComponent,
    ButtonDefaultComponent,
    ProjectCardComponent,
    CarouselComponent,
    HeadingComponent,
    LoadingComponent,
    ButtonSecondaryComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  isFilter = false;
  isLoading = false;
  filteredProjects: Array<CardProject> = [];
  projects: CardProject[] = [];
  projectIcon: Icon = projectIcon;
  frontendIcon: Icon = frontendIcon;
  backendIcon: Icon = backendIcon;
  fullstackIcon: Icon = fullstackIcon;

  private projectService = inject(ProjectService);

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects(): void {
    this.isLoading = true;
    this.projectService.getProjects().subscribe((projects: CardProject[]) => {
      this.projects = projects;
      this.isLoading = false;
    });
  }

  public filter(filterStack: string): void {
    this.isLoading = true;
    this.isFilter = true;
    this.projectService.filteredProjects(filterStack).subscribe(projects => {
      this.filteredProjects = projects;
      this.isLoading = false;
    });
  }

  public seeAllProjects(): void {
    this.isLoading = true;
    this.isFilter = true;
    this.projectService.getProjects().subscribe(projects => {
      this.filteredProjects = projects;
      this.isLoading = false;
    });
  }
}
