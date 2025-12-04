import { booleanAttribute, Component, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Icon } from '@core/models/entities/icon';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [NgClass, ScrollClassDirective, NgOptimizedImage],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
})
export class HeadingComponent {
  @Input() headingTitle = '';
  @Input() headingTagText = '';
  @Input() headingIcon!: Icon;
  @Input() isHeadingCenter = false;
  @Input() isDark = false;
  @Input({ transform: booleanAttribute }) isLight = false;
}
