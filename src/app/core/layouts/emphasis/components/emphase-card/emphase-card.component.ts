import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Icon } from '@core/models/entities/icon';

@Component({
  selector: 'app-emphase-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './emphase-card.component.html',
  styleUrl: './emphase-card.component.scss',
})
export class EmphaseCardComponent {
  @Input() emphaseIcon?: Icon;
  @Input() emphaseTitle = '';
  @Input() emphaseSubtitle = '';
}
