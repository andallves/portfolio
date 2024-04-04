import { Component } from '@angular/core';
import { Icon } from 'src/app/core/models/entities/icon';
import { EmphaseCardComponent } from 'src/app/core/layouts/emphasis/components/emphase-card/emphase-card.component';

@Component({
  selector: 'app-emphasis',
  standalone: true,
  imports: [EmphaseCardComponent],
  templateUrl: './emphasis.component.html',
  styleUrl: './emphasis.component.scss',
})
export class EmphasisComponent {
  codeIcon: Icon = {
    pathIcon: './assets/code.png',
    altText: 'code icone',
    height: '42',
    width: '42',
  };

  developerIcon: Icon = {
    pathIcon: './assets/trabalho.png',
    altText: 'desenvolvimento profissional',
    height: '42',
    width: '42',
  };

  creativityIcon: Icon = {
    pathIcon: './assets/creativity.png',
    altText: 'criatividade',
    height: '42',
    width: '42',
  };
}
