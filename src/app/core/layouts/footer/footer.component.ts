import { Component } from '@angular/core';
import { SocialMediaComponent } from '@shared/components/social-media/social-media.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMediaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
