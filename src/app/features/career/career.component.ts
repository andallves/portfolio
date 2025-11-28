import { Component, inject, OnInit } from '@angular/core';
import { Icon } from '@core/models/entities/icon';
import { HeadingComponent } from '@shared/components/heading/heading.component';
import { carrerIcon } from '@core/data/icons';
import { Experience } from '@core/models/entities/trajectory';
import { experiencesData } from '@core/data/experiences';
import { CareerTableComponent } from 'src/app/features/career/components/career-table/career-table.component';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';
import { ExperienceService } from '@core/services/experience.service';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [HeadingComponent, CareerTableComponent, ScrollClassDirective],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent implements OnInit {
  carrerIcon: Icon = carrerIcon;
  experiences: Experience[] = [];

  constructor() {
    this.experiences = experiencesData;
  }

  private readonly experienceService = inject(ExperienceService);

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects(): void {
    this.experienceService.experiences.subscribe(
      (experiences: Experience[]) => {
        this.experiences = experiences;
      }
    );
  }
}
