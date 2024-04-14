import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trajectory-card',
  standalone: true,
  imports: [],
  templateUrl: './trajectory-card.component.html',
  styleUrl: './trajectory-card.component.scss',
})
export class TrajectoryCardComponent {
  @Input() trajectoryTitle: string = '';
  @Input() trajectoryDescription: string = '';
  @Input() trajectoryTime: string = '';
  @Input() trajectoryDate: string = '';
}
