import { Component } from '@angular/core';
import { Icon } from '@core/models/entities/icon';
import { HeadingComponent } from '@shared/components/heading/heading.component';
import { TechnologyIconComponent } from 'src/app/features/skills/components/technology-icon/technology-icon.component';
import { skillIcon } from '@core/data/icons';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TechnologyIconComponent, HeadingComponent, ScrollClassDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
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
