import { Component } from '@angular/core';
import { Icon } from '#core/models/entities/icon';
import { HeadingComponent } from '#shared/components/heading/heading.component';
import { LoadingComponent } from '#shared/components/loading/loading.component';
import { carrerIcon } from '#core/data/icons';
import { CardTrajectory } from '#core/models/entities/trajectory';
import { TrajectoryCardComponent } from './trajectory-card/trajectory-card.component';

@Component({
  selector: 'app-trajectory',
  standalone: true,
  imports: [HeadingComponent, LoadingComponent, TrajectoryCardComponent],
  templateUrl: './trajectory.component.html',
  styleUrl: './trajectory.component.scss',
})
export class TrajectoryComponent {
  carrerIcon: Icon = carrerIcon;

  carrerTrajectory: Array<CardTrajectory> = [
    {
      trajectoryTitle: 'Núcleo de Desenvolvimento de Software',
      trajectoryDescription:
        'Atuo desenvolendo sistema no Núcle de Desenvolvimento de Software para a comunidade academica do IFCE campus Maracanaú.',
      trajectoryTime: '6 meses',
      trajectoryDate: 'Agosto/2023 - Atualmente',
    },
    {
      trajectoryTitle: 'Ciência da Computação',
      trajectoryDescription:
        'Atuo desenvolendo sistema no Núcle de Desenvolvimento de Software para a comunidade academica do IFCE campus Maracanaú.',
      trajectoryTime: '6 meses',
      trajectoryDate: 'Agosto/2023 - Atualmente',
    },
  ];

  academicTrajectory: Array<CardTrajectory> = [
    {
      trajectoryTitle: 'Ciência da Computação',
      trajectoryDescription:
        'Atuo desenvolendo sistema no Núcle de Desenvolvimento de Software para a comunidade academica do IFCE campus Maracanaú.',
      trajectoryTime: '6 meses',
      trajectoryDate: 'Agosto/2023 - Atualmente',
    },
    {
      trajectoryTitle: 'Ciência da Computação',
      trajectoryDescription:
        'Atuo desenvolendo sistema no Núcle de Desenvolvimento de Software para a comunidade academica do IFCE campus Maracanaú.',
      trajectoryTime: '6 meses',
      trajectoryDate: 'Agosto/2023 - Atualmente',
    },
  ];
}
