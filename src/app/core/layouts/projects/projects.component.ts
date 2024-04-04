import { Component } from '@angular/core';
import { Icon } from 'src/app/core/models/entities/icon';
import { ProjectCard } from 'src/app/core/models/entities/project-card';
import { CustomTextComponent } from 'src/app/shared/components/custom-text/custom-text.component';
import { ButtonDefaultComponent } from 'src/app/shared/components/button-default/button-default.component';
import { HeadingComponent } from 'src/app/shared/components/heading/heading.component';
import { ProjectCardComponent } from 'src/app/core/layouts/projects/components/project-card/project-card.component';
import { CarouselComponent } from 'src/app/core/layouts/projects/components/carousel/carousel.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CustomTextComponent,
    ButtonDefaultComponent,
    ProjectCardComponent,
    CarouselComponent,
    HeadingComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectIcon: Icon = {
    height: '22',
    width: '22',
    altText: 'portfolio icone',
    pathIcon: './assets/project.png',
  };

  frontendIcon: Icon = {
    pathIcon: './assets/frontend.png',
    width: '32',
    height: '32',
    altText: 'frontend icone',
  };

  backendIcon: Icon = {
    pathIcon: './assets/backend.png',
    width: '32',
    height: '32',
    altText: 'backend icone',
  };

  fullstackIcon: Icon = {
    pathIcon: './assets/fullstack.png',
    width: '32',
    height: '32',
    altText: 'fullstack icone',
  };

  projects: Array<ProjectCard> = [
    {
      title: 'Move it',
      description: 'string',
      tecnologias: [
        { text: 'HTML5', isSmall: true },
        { text: 'CSS3', isSmall: true },
        { text: 'TypeScript', isSmall: true },
        { text: 'Angular', isSmall: true },
      ],
      image: {
        pathImage: './assets/profile.jpg',
        altText: 'imagem de avatar',
        width: '50',
        height: '50',
      },
    },
    {
      title: 'Move it',
      description: 'string',
      tecnologias: [
        { text: 'HTML5', isSmall: true },
        { text: 'CSS3', isSmall: true },
        { text: 'TypeScript', isSmall: true },
        { text: 'Angular', isSmall: true },
      ],
      image: {
        pathImage: './assets/profile.jpg',
        altText: 'imagem de avatar',
        width: '50',
        height: '50',
      },
    },
    {
      title: 'Move it',
      description: 'string',
      tecnologias: [
        { text: 'HTML5', isSmall: true },
        { text: 'CSS3', isSmall: true },
        { text: 'TypeScript', isSmall: true },
        { text: 'Angular', isSmall: true },
      ],
      image: {
        pathImage: './assets/profile.jpg',
        altText: 'imagem de avatar',
        width: '50',
        height: '50',
      },
    },
    {
      title: 'Move it',
      description: 'string',
      tecnologias: [
        { text: 'HTML5', isSmall: true },
        { text: 'CSS3', isSmall: true },
        { text: 'TypeScript', isSmall: true },
        { text: 'Angular', isSmall: true },
      ],
      image: {
        pathImage: './assets/profile.jpg',
        altText: 'imagem de avatar',
        width: '50',
        height: '50',
      },
    },
    {
      title: 'Move it',
      description: 'string',
      tecnologias: [
        { text: 'HTML5', isSmall: true },
        { text: 'CSS3', isSmall: true },
        { text: 'TypeScript', isSmall: true },
        { text: 'Angular', isSmall: true },
      ],
      image: {
        pathImage: './assets/profile.jpg',
        altText: 'imagem de avatar',
        width: '50',
        height: '50',
      },
    },
    {
      title: 'Move it',
      description: 'string',
      tecnologias: [
        { text: 'HTML5', isSmall: true },
        { text: 'CSS3', isSmall: true },
        { text: 'TypeScript', isSmall: true },
        { text: 'Angular', isSmall: true },
      ],
      image: {
        pathImage: './assets/profile.jpg',
        altText: 'imagem de avatar',
        width: '50',
        height: '50',
      },
    },
    {
      title: 'Move it',
      description: 'string',
      tecnologias: [
        { text: 'HTML5', isSmall: true },
        { text: 'CSS3', isSmall: true },
        { text: 'TypeScript', isSmall: true },
        { text: 'Angular', isSmall: true },
      ],
      image: {
        pathImage: './assets/profile.jpg',
        altText: 'imagem de avatar',
        width: '50',
        height: '50',
      },
    },
  ];
}
