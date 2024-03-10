import { Component } from '@angular/core';
import { GithubComponent } from '../../assets/icons/github/github.component';
import {
  LinkedinComponent,
} from '../../assets/icons/linkedin/linkedin.component';
import {
  InstagramComponent,
} from '../../assets/icons/instagram/instagram.component';


@Component({
  selector: 'app-social-midia',
  standalone: true,
  imports: [
    GithubComponent,
    LinkedinComponent,
    InstagramComponent
  ],
  templateUrl: './social-midia.component.html',
  styleUrl: './social-midia.component.scss',
})
export class SocialMidiaComponent {}
