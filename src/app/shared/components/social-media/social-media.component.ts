import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { GithubComponent } from '#shared/assets/icons/github/github.component';
import { LinkedinComponent } from '#shared/assets/icons/linkedin/linkedin.component';
import { InstagramComponent } from '#shared/assets/icons/instagram/instagram.component';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    GithubComponent,
    LinkedinComponent,
    InstagramComponent,
    RouterModule,
    NgClass,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent {
  protected animated = false;
  public animate(): void {
    this.animated = true;
    this.time();
  }

  public time() {
    setTimeout(() => {
      this.animated = false;
    }, 2000);
  }
}
