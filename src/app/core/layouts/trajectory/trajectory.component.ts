import { Component } from '@angular/core';
import { Icon } from '#core/models/entities/icon';
import { HeadingComponent } from '#shared/components/heading/heading.component';
import { LoadingComponent } from '#shared/components/loading/loading.component';
import { carrerIcon } from '#core/data/icons';
import { CardTrajectory } from '#core/models/entities/trajectory';
import { TrajectoryCardComponent } from './trajectory-card/trajectory-card.component';
import { academicTrajectory, carrerTrajectory } from '#core/data/trajectory';
import { ScrollClassDirective } from '#core/directives/scroll-class.directive';

@Component({
  selector: 'app-trajectory',
  standalone: true,
  imports: [
    HeadingComponent,
    LoadingComponent,
    TrajectoryCardComponent,
    ScrollClassDirective,
  ],
  templateUrl: './trajectory.component.html',
  styleUrl: './trajectory.component.scss',
})
export class TrajectoryComponent {
  carrerIcon: Icon = carrerIcon;
  carrerTrajectory: Array<CardTrajectory> = carrerTrajectory;
  academicTrajectory: Array<CardTrajectory> = academicTrajectory;
}
