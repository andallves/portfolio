import { Component, input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Experience } from '@core/models/entities/trajectory';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-career-table',
  standalone: true,
  imports: [NgClass, ScrollClassDirective],
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
export class CareerTableComponent implements OnInit {
  experiences = input.required<Experience[]>();
  activeExperience: Experience = {} as Experience;
  activeExperienceId: string = '';
  tempExperienceId: string | null = null;

  ngOnInit() {
    if (this.experiences().length) {
      const firstExperience = this.experiences()[0];
      this.setActiveExperience(firstExperience.id);
    }
  }

  setActiveExperience(id: string) {
    if (id === this.activeExperienceId) return;

    this.tempExperienceId = id;
    this.activeExperienceId = id;
  }

  onFlipStart() {
    if (!this.tempExperienceId) return;

    setTimeout(() => {
      const newExp = this.experiences().find(
        e => e.id === this.tempExperienceId
      );
      if (newExp) this.activeExperience = newExp;
    }, 300);
  }

  onFlipDone() {
    this.tempExperienceId = null;
  }
}
