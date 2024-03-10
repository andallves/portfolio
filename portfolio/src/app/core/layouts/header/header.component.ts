import { Component } from '@angular/core';
import {
  SocialMidiaComponent,
} from '../../../shared/components/social-midia/social-midia.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SocialMidiaComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
