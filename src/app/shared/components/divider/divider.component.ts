import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
})
export class DividerComponent {
  @Input() width? = '80';
}
