import { Component } from '@angular/core';
import { Icon } from '#core/models/entities/icon';
import { HeadingComponent } from '#shared/components/heading/heading.component';
import { LoadingComponent } from '#shared/components/loading/loading.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [HeadingComponent, LoadingComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  carrerIcon: Icon = {
    path: './assets/career.png',
    altText: 'icone de trabalho',
    width: '22',
    height: '22',
  };
}
