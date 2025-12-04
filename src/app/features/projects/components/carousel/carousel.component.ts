import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardProject } from '@core/models/entities/card-project';
import { ProjectCardComponent } from 'src/app/features/projects/components/project-card/project-card.component';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    ProjectCardComponent,
    MatIconModule,
    MatButtonModule,
    ScrollClassDirective,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements AfterViewInit {
  @ViewChildren('cardProject') cardProjectDiv!: QueryList<ElementRef>;
  @Input() cardProject!: Array<CardProject>;
  protected cardActive = 0;

  constructor() {}

  ngAfterViewInit(): void {
    this.getArrayLength();
  }

  getArrayLength(): number {
    if (this.cardProjectDiv.toArray().length === 0) return -1;
    return this.cardProjectDiv.toArray().length;
  }

  nextCard() {
    if (this.getArrayLength() === -1) return;
    if (this.cardActive < this.getArrayLength() - 1) {
      this.cardActive += 1;
    }
  }

  prevCard() {
    if (this.getArrayLength() === -1) return;
    if (this.cardActive > 0) {
      this.cardActive -= 1;
    }
  }
}
