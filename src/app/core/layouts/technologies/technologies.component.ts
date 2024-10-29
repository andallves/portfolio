import { Component } from '@angular/core';
import { Icon } from '@core/models/entities/icon';
import { HeadingComponent } from '@shared/components/heading/heading.component';
import { CustomTextComponent } from '@shared/components/custom-text/custom-text.component';
import { TechnologyIconComponent } from './components/technology-icon/technology-icon.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { skillIcon } from '@core/data/icons';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [
    CustomTextComponent,
    TechnologyIconComponent,
    HeadingComponent,
    LoadingComponent,
    ScrollClassDirective,
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  skillIcon: Icon = skillIcon;

  mainTechnologies: Array<string> = [
    'html',
    'css',
    'javascript',
    'typescript',
    'angular',
    'git',
    'gitlab',
    'github',
    'sass',
  ];

  secondaryTechnologies: Array<string> = [
    'react',
    'jest',
    'bootstrap',
    'tailwind',
    'node',
    'json',
    'csharp',
    'sql_server',
    'mysql',
    'docker',
  ];
}
