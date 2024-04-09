import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProjectCard } from '#core/models/entities/project-card';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { CarouselItemDirective } from '#core/directives/carousel-item.directive';
import { CarouselItem } from '#core/models/entities/carousel';

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
export class ProjectCardComponent implements OnInit, OnChanges {
  @Input() project!: ProjectCard;
  @Input() cardItem!: number;
  @Input() cardActive: number = 3;

  protected carouselItem!: CarouselItem;

  ngOnInit() {
    this.carouselItem = {
      active: this.cardActive,
      id: this.cardItem,
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cardActive !== changes['cardActive'].currentValue) {
      this.carouselItem = {
        active: this.cardActive,
        id: this.cardItem,
      };
    }
  }
}
