import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '#core/components/logo/logo.component';
import { SocialMediaComponent } from '#shared/components/social-media/social-media.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [LogoComponent, SocialMediaComponent, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
