import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-career-card',
  standalone: true,
  imports: [],
  templateUrl: './career-card.component.html',
  styleUrl: './career-card.component.scss',
})
export class CareerCardComponent {
  @Input() trajectoryTitle: string = '';
  @Input() trajectoryDescription: string = '';
  @Input() trajectoryTime: string = '';
  @Input() trajectoryDate: string = '';
}
