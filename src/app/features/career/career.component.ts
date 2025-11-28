import { Component } from '@angular/core';
import { Icon } from '@core/models/entities/icon';
import { HeadingComponent } from '@shared/components/heading/heading.component';
import { carrerIcon } from '@core/data/icons';
import { Experience } from '@core/models/entities/trajectory';
import { experiencesData } from '@core/data/experiences';
import { CareerTableComponent } from 'src/app/features/career/components/career-table/career-table.component';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [HeadingComponent, CareerTableComponent, ScrollClassDirective],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  carrerIcon: Icon = carrerIcon;
  experiences: Experience[] = [];

  constructor() {
    this.experiences = experiencesData;
  }
}
