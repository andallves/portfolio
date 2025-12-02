import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-technology-icon',
  standalone: true,
  imports: [NgOptimizedImage, ScrollClassDirective],
  templateUrl: './technology-icon.component.html',
  styleUrl: './technology-icon.component.scss',
})
export class TechnologyIconComponent {
  @Input() technology = '';

  get technologyName(): string {
    return this.technology.normalize();
  }
}
