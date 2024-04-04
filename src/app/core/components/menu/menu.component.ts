import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from 'src/app/core/components/logo/logo.component';
import { SocialMediaComponent } from 'src/app/shared/components/social-media/social-media.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [LogoComponent, SocialMediaComponent, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @ViewChild('skills') pageSkills!: ElementRef;
  goToSkills() {
    this.pageSkills.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
