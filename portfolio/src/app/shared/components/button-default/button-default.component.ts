import { Component, Input } from '@angular/core';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { Buttontype } from '#core/models/entities/button';
import { Icon } from '#core/models/entities/icon';

@Component({
  selector: 'app-button-default',
  standalone: true,
  imports: [NgTemplateOutlet, NgOptimizedImage],
  templateUrl: './button-default.component.html',
  styleUrl: './button-default.component.scss',
})
export class ButtonDefaultComponent {
  @Input() type: Buttontype = 'button';
  @Input({ required: true }) buttonText = '';
  @Input({ required: true }) icon!: Icon;
  @Input() href? = '';
  @Input() download? = '';
  @Input() linkType? = '';
}
