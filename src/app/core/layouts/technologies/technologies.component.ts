import { Component } from '@angular/core';
import { Icon } from '#core/models/entities/icon';
import { HeadingComponent } from '#shared/components/heading/heading.component';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { TechnologyIconComponent } from './components/technology-icon/technology-icon.component';
import { LoadingComponent } from '#shared/components/loading/loading.component';
import { skillIcon } from '#core/data/icons';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [
    CustomTextComponent,
    TechnologyIconComponent,
    HeadingComponent,
    LoadingComponent,
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  skillIcon: Icon = skillIcon;

  technologiesMain: Array<string> = [
    'angular',
    'javascript',
    'typescript',
    'html',
    'css',
    'gitlab',
    'git',
    'sass',
  ];

  technologiesSecondary: Array<string> = ['github', 'node', 'react'];
}
