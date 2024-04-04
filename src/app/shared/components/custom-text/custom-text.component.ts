import { Component, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Icon } from 'src/app/core/models/entities/icon';
import { CustomText } from 'src/app/core/models/entities/custom-text';

@Component({
  selector: 'app-custom-text',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './custom-text.component.html',
  styleUrl: './custom-text.component.scss',
})
export class CustomTextComponent implements CustomText {
  @Input() icon?: Icon;
  @Input() text = '';
  @Input() isSmall = false;
}
