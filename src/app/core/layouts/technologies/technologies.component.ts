import { Component } from '@angular/core';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { Icon } from '#core/models/entities/icon';
import { TechnologyIconComponent } from '#core/layouts/technologies/components/technology-icon/technology-icon.component';
import { HeadingComponent } from '#shared/components/heading/heading.component';

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
