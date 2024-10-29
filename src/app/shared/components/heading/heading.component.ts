import { Component, Input, booleanAttribute } from '@angular/core';
import { NgClass } from '@angular/common';
import { Icon } from '@core/models/entities/icon';
import { CustomTextComponent } from '@shared/components/custom-text/custom-text.component';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CustomTextComponent, NgClass, ScrollClassDirective],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
})
export class HeadingComponent {
  @Input() headingTitle = '';
  @Input() headingTagText = '';
  @Input() headingIcon!: Icon;
  @Input() isHeadingCenter = false;
  @Input({ transform: booleanAttribute }) isLight = false;
}
