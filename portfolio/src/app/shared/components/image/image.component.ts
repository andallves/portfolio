import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Image } from '../../../core/models/entities/image';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() image!: Image;
}
