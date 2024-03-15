import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import {
  SocialMidiaComponent,
} from '../../../shared/components/social-midia/social-midia.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    LogoComponent,
    SocialMidiaComponent,
    RouterLink,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
