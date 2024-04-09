import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardProject } from '#core/models/entities/card-project';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { CarouselItemDirective } from '#core/directives/carousel-item.directive';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    CustomTextComponent,
    CarouselItemDirective,
  ],
  providers: [CarouselItemDirective],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() cardProject!: CardProject;
  @Input() cardItem!: number;
  @Input() cardActive!: number;
}
