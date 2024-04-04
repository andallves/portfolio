import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Image } from 'src/app/core/models/entities/image';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() image!: Image;
  protected animated = false;
  public animate(): void {
    this.animated = true;
    this.time();
  }

  public time() {
    setTimeout(() => {
      this.animated = false;
    }, 2000);
  }
}
