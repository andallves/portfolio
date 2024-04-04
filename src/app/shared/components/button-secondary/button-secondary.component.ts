import { Component, Input } from '@angular/core';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { Buttontype } from 'src/app/core/models/entities/button';
import { Icon } from 'src/app/core/models/entities/icon';

@Component({
  selector: 'app-button-secondary',
  standalone: true,
  imports: [NgTemplateOutlet, NgOptimizedImage],
  templateUrl: './button-secondary.component.html',
  styleUrl: './button-secondary.component.scss',
})
export class ButtonSecondaryComponent {
  @Input() type: Buttontype = 'button';
  @Input({ required: true }) buttonText = '';
  @Input() icon!: Icon;
  @Input() href? = '';
  @Input() download? = '';
  @Input() linkType? = '';
}
