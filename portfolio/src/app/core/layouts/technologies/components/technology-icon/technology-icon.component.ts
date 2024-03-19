import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-technology-icon',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './technology-icon.component.html',
  styleUrl: './technology-icon.component.scss',
})
export class TechnologyIconComponent {
  @Input() technology = '';
}
