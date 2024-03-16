import { Component } from '@angular/core';
import { SocialMidiaComponent } from '#shared/components/social-midia/social-midia.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMidiaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
