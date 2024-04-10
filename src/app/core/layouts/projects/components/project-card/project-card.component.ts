import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardProject } from '#core/models/entities/card-project';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { CarouselItemDirective } from '#core/directives/carousel-item.directive';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from '#core/layouts/projects/components/project-modal/project-modal.component';

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

  constructor(private dialog: MatDialog) {}

  openModalProject(exitAnimationDuration: string) {
    this.dialog.open(ProjectModalComponent, {
      data: this.cardProject,
      exitAnimationDuration,
      panelClass: ['animate__animated', 'animate__zoomIn'],
    });
  }
}
