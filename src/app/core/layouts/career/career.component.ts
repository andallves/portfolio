import { Component } from '@angular/core';
import { Icon } from '#core/models/entities/icon';
import { HeadingComponent } from '#shared/components/heading/heading.component';
import { LoadingComponent } from '#shared/components/loading/loading.component';
import { carrerIcon } from '#core/data/icons';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [HeadingComponent, LoadingComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  carrerIcon: Icon = carrerIcon;
}
