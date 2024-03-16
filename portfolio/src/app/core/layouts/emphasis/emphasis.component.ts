import { Component } from '@angular/core';
import { Icon } from '#core/models/entities/icon';
import { EmphaseCardComponent } from './components/emphase-card/emphase-card.component';

@Component({
  selector: 'app-emphasis',
  standalone: true,
  imports: [EmphaseCardComponent],
  templateUrl: './emphasis.component.html',
  styleUrl: './emphasis.component.scss',
})
export class EmphasisComponent {
  firstIcon: Icon = {
    pathIcon: './assets/code.png',
    altText: 'code icone',
    height: '42',
    width: '42',
  };
}
