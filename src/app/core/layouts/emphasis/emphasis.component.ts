import { Component } from '@angular/core';
import { Icon } from '#core/models/entities/icon';
import { EmphaseCardComponent } from './components/emphase-card/emphase-card.component';
import { codeIcon, creativityIcon, developerIcon } from '#core/data/icons';
import { ScrollClassDirective } from '#core/directives/scroll-class.directive';

@Component({
  selector: 'app-emphasis',
  standalone: true,
  imports: [EmphaseCardComponent, ScrollClassDirective],
  templateUrl: './emphasis.component.html',
  styleUrl: './emphasis.component.scss',
})
export class EmphasisComponent {
  codeIcon: Icon = codeIcon;
  developerIcon: Icon = developerIcon;
  creativityIcon: Icon = creativityIcon;
}
