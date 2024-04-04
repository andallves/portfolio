import { Component, Input } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { ProjectCard } from 'src/app/core/models/entities/project-card';
import { CustomTextComponent } from 'src/app/shared/components/custom-text/custom-text.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgOptimizedImage, CustomTextComponent, NgForOf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project!: ProjectCard;
}
