import { Component } from '@angular/core';
import { Icon } from '@core/models/entities/icon';
import { EmphaseCardComponent } from './components/emphase-card/emphase-card.component';
import { brainstormIcon, challengeIcon, codeIcon } from '@core/data/icons';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';
export interface EmphaseCardInfo {
  emphasisSubtitle: string;
  emphasisTitle: string;
  emphasisIcon: Icon;
}
@Component({
  selector: 'app-emphasis',
  standalone: true,
  imports: [EmphaseCardComponent, ScrollClassDirective],
  templateUrl: './emphasis.component.html',
  styleUrl: './emphasis.component.scss',
})
export class EmphasisComponent {
  topEmphasisCardsInfo: EmphaseCardInfo[] = [
    {
      emphasisSubtitle: 'Desenvolvimento',
      emphasisTitle: 'Fullstack',
      emphasisIcon: challengeIcon,
    },
    {
      emphasisSubtitle: 'Experiência',
      emphasisTitle: 'Comprovada',
      emphasisIcon: codeIcon,
    },
    {
      emphasisSubtitle: 'Resultados de ',
      emphasisTitle: 'Alto Impacto',
      emphasisIcon: brainstormIcon,
    },
  ];

  lowerEmphasisCardsInfo: Omit<EmphaseCardInfo, 'emphasisIcon'>[] = [
    {
      emphasisSubtitle: 'Inovação',
      emphasisTitle: 'Contínua',
    },
    {
      emphasisSubtitle: 'Mentalidade',
      emphasisTitle: 'de Growth',
    },
    {
      emphasisSubtitle: 'Arquitetura',
      emphasisTitle: 'de Sistemas',
    },
  ];
}
