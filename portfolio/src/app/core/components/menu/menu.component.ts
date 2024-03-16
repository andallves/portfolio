import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '#core/components/logo/logo.component';
import { SocialMidiaComponent } from '#shared/components/social-midia/social-midia.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [LogoComponent, SocialMidiaComponent, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
