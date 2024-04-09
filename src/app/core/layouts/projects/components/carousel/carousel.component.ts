import {
  Component,
  ElementRef,
  ViewChildren,
  QueryList,
  Input,
  AfterViewInit,
} from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProjectCard } from '#core/models/entities/project-card';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CarouselItemDirective } from '#core/directives/carousel-item.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    ProjectCardComponent,
    MatIconModule,
    MatButtonModule,
    CarouselItemDirective,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements AfterViewInit {
  @ViewChildren('cards') cards!: QueryList<ElementRef>;
  @Input() projects!: Array<ProjectCard>;
  protected active = 3;

  constructor() {}

  ngAfterViewInit(): void {
    this.getArrayLength();
  }

  getArrayLength(): number {
    if (this.cards.toArray().length === 0) return -1;
    return this.cards.toArray().length;
  }

  nextCard() {
    if (this.getArrayLength() == -1) return;
    if (this.active + 1 < this.getArrayLength()) {
      this.active += 1;
      return;
    }
    return;
  }

  prevCard() {
    if (this.getArrayLength() == -1) return;
    if (this.active - 1 < 0) {
      this.active -= 1;
      return;
    }
    return;
  }
}
