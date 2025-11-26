import { Component } from '@angular/core';
import { Icon } from '@core/models/entities/icon';
import { HeadingComponent } from '@shared/components/heading/heading.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { carrerIcon } from '@core/data/icons';
import { CardTrajectory } from '@core/models/entities/trajectory';
import { CareerCardComponent } from 'src/app/features/career/career-card/career-card.component';
import { academicTrajectory, carrerTrajectory } from '@core/data/trajectory';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';
import {
  CareerTableComponent
} from 'src/app/features/career/components/career-table/career-table.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    HeadingComponent,
    LoadingComponent,
    CareerCardComponent,
    ScrollClassDirective,
    CareerTableComponent,
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  carrerIcon: Icon = carrerIcon;
  carrerTrajectory: Array<CardTrajectory> = carrerTrajectory;
  academicTrajectory: Array<CardTrajectory> = academicTrajectory;
}
