import { booleanAttribute, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { Icon } from '#core/models/entities/icon';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CustomTextComponent, NgClass],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
})
export class HeadingComponent {
  @Input() title = '';
  @Input() tagText = '';
  @Input() icon!: Icon;
  @Input({ transform: booleanAttribute }) alignCenter = false;
}
