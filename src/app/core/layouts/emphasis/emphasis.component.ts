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
  codeIcon: Icon = {
    path: './assets/code.png',
    altText: 'code icone',
    height: '42',
    width: '42',
  };

  developerIcon: Icon = {
    path: './assets/trabalho.png',
    altText: 'desenvolvimento profissional',
    height: '42',
    width: '42',
  };

  creativityIcon: Icon = {
    path: './assets/creativity.png',
    altText: 'criatividade',
    height: '42',
    width: '42',
  };
}
