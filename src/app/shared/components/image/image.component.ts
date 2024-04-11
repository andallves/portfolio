import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Image } from '#core/models/entities/image';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input({ required: true }) image!: Image;
  protected isAnimated = false;
}
