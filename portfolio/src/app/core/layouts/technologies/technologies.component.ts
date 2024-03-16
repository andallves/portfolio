import { Component } from '@angular/core';
import { Icon } from '#core/models/entities/icon';
import { HeadingComponent } from '#shared/components/heading/heading.component';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { TechnologyIconComponent } from './components/technology-icon/technology-icon.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CustomTextComponent, TechnologyIconComponent, HeadingComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  skillIcon: Icon = {
    pathIcon: './assets/skills.png',
    altText: 'icone de habilidades',
    width: '22',
    height: '22',
  };

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
