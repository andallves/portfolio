import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { Buttontype } from '@core/models/entities/button';
import { Icon } from '@core/models/entities/icon';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-button-secondary',
  standalone: true,
  imports: [NgOptimizedImage, NgIf, ScrollClassDirective],
  templateUrl: './button-secondary.component.html',
  styleUrl: './button-secondary.component.scss',
})
export class ButtonSecondaryComponent {
  @Input({ transform: booleanAttribute }) isButtonDownload? = false;
  @Input({ transform: booleanAttribute }) isButtonIconLeft: boolean = false;
  @Input({ required: true }) buttonText = '';
  @Input() buttonType: Buttontype = 'button';
  @Input() buttonIcon!: Icon;
  @Input() buttonUrl? = '';
  @Input() buttonDownload? = '';
  @Input() buttonLinkType? = '';
  @Output() buttonClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  clicked() {
    this.buttonClick.emit();
  }
}
