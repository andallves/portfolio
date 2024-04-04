import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Icon } from 'src/app/core/models/entities/icon';
import { CustomTextComponent } from 'src/app/shared/components/custom-text/custom-text.component';

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
  @Input() alignCenter = false;
}
