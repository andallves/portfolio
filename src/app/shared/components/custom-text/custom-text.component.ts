import { booleanAttribute, Component, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Icon } from '@core/models/entities/icon';
import { Size } from '@core/models/entities/custom-text';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-custom-text',
  standalone: true,
  imports: [NgOptimizedImage, NgClass, ScrollClassDirective],
  templateUrl: './custom-text.component.html',
  styleUrl: './custom-text.component.scss',
})
export class CustomTextComponent {
  @Input({ transform: booleanAttribute }) isDark = false;
  @Input() icon?: Icon;
  @Input() text = '';
  @Input() size: Size = 'normal';
}
