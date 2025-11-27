import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export interface Experience {
  id: string;
  title: string;
  date: string;
  company: string;
  description: string;
}

@Component({
  selector: 'app-career-table',
  standalone: true,
  imports: [NgClass],
  templateUrl: './career-table.component.html',
  styleUrl: './career-table.component.scss',
  animations: [
    trigger('flipAnimation', [
      transition('* => *', [
        animate(
          '600ms ease-in-out',
          keyframes([
            style({ transform: 'rotateY(0deg)', offset: 0 }),
            style({ transform: 'rotateY(90deg)', offset: 0.45 }),
            style({ transform: 'rotateY(90deg)', offset: 0.55 }), // pausa trocando o conteúdo
            style({ transform: 'rotateY(0deg)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class CareerTableComponent {
  isActiveButton: boolean = true;
  isFlipping: boolean = false;
  tempExperienceId: string | null = null;
  activeExperienceId: string = '';
  activeExperience: Experience = {} as Experience;

  experiences: Experience[] = [
    {
      id: 'nds',
      title: 'NDS - Full Stack Developer',
      date: 'Ago 2023 - Abr 2025',
      company: 'Núcleo de Desenvolvimento de Software',
      description: `
      Trabalhei na InnovaSfera, onde tive a oportunidade de participar de vários
          projetos para diversos clientes. Nessa trajetória, trabalhei em várias
          criações de sites, sistemas e interfaces web e mobile com a equipe de
          tecnologia da empresa. A InnovaSfera é referência em qualidade e inovação
          em suas soluções tecnológicas, seja em desenvolvimento ou infraestrutura.
    `,
    },
    {
      id: 'viceri',
      title: 'Viceri - Desenvolvedor Front-end',
      date: 'Ago 2023 - Dez 2023',
      company: 'Viceri Tecnologia e Inovação',
      description: `
      Trabalhei na InnovaSfera, onde tive a oportunidade de participar de vários
          projetos para diversos clientes. Nessa trajetória, trabalhei em várias
          criações de sites, sistemas e interfaces web e mobile com a equipe de
          tecnologia da empresa. A InnovaSfera é referência em qualidade e inovação
          em suas soluções tecnológicas, seja em desenvolvimento ou infraestrutura.
    `,
    },
    {
      id: 'coffee',
      title: 'Coffee AI - Frontend Developer',
      date: '2022 - 2023',
      company: 'Coffee AI Solutions',
      description: `
      Trabalhei na InnovaSfera, onde tive a oportunidade de participar de vários
          projetos para diversos clientes. Nessa trajetória, trabalhei em várias
          criações de sites, sistemas e interfaces web e mobile com a equipe de
          tecnologia da empresa. A InnovaSfera é referência em qualidade e inovação
          em suas soluções tecnológicas, seja em desenvolvimento ou infraestrutura.
    `,
    },
  ];
  constructor() {
    this.setActiveExperience('nds'); // inicializa
  }

  setActiveExperience(id: string) {
    if (id === this.activeExperienceId) return;

    this.tempExperienceId = id;
    this.activeExperienceId = id; // dispara animação (trigger)
  }

  onFlipStart() {
    if (!this.tempExperienceId) return;

    setTimeout(() => {
      const newExp = this.experiences.find(e => e.id === this.tempExperienceId);
      if (newExp) this.activeExperience = newExp;
    }, 300); // troca sincronizada com o rotateY(90deg)
  }

  onFlipDone() {
    this.tempExperienceId = null;
  }
}
