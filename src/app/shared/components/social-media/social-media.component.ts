import { Component } from '@angular/core';
import { GithubComponent } from '@shared/components/social-media/components/github/github.component';
import { LinkedinComponent } from '@shared/components/social-media/components/linkedin/linkedin.component';
import { RouterModule } from '@angular/router';
import { InstagramComponent } from '@shared/components/social-media/components/instagram/instagram.component';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    GithubComponent,
    LinkedinComponent,
    InstagramComponent,
    RouterModule,
    ScrollClassDirective,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent {}
