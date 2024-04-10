import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgClass, NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { Buttontype } from '#core/models/entities/button';
import { Icon } from '#core/models/entities/icon';

@Component({
  selector: 'app-button-default',
  standalone: true,
  imports: [NgTemplateOutlet, NgOptimizedImage, NgClass],
  templateUrl: './button-default.component.html',
  styleUrl: './button-default.component.scss',
})
export class ButtonDefaultComponent {
  @Input({ transform: booleanAttribute }) isDark = false;
  @Input() url?: string | null = null;
  @Input() type: Buttontype = 'button';
  @Input({ required: true }) buttonText = '';
  @Input() icon?: Icon;
  @Output() clickButton: EventEmitter<boolean> = new EventEmitter();

  public clicked(): void {
    this.clickButton.emit();
  }
}
