import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  NgClass,
  NgIf,
  NgOptimizedImage,
  NgTemplateOutlet,
} from '@angular/common';
import { Buttontype } from '#core/models/entities/button';
import { Icon } from '#core/models/entities/icon';

@Component({
  selector: 'app-button-default',
  standalone: true,
  imports: [NgTemplateOutlet, NgOptimizedImage, NgClass, NgIf],
  templateUrl: './button-default.component.html',
  styleUrl: './button-default.component.scss',
})
export class ButtonDefaultComponent {
  @Input({ transform: booleanAttribute }) isDark = false;
  @Input() buttonUrl?: string = '';
  @Input() buttonType: Buttontype = 'button';
  @Input({ required: true }) buttonText = '';
  @Input() buttonIcon?: Icon;
  @Output() buttonClick: EventEmitter<boolean> = new EventEmitter();

  public clicked(): void {
    this.buttonClick.emit();
  }
}
