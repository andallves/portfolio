import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon } from '@core/models/entities/icon';
import { Image } from '@core/models/entities/image';
import { SocialMediaComponent } from '@shared/components/social-media/social-media.component';
import { ImageComponent } from '@shared/components/image/image.component';
import { downloadIcon, helloIcon, whatsappIcon } from '@core/data/icons';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SocialMediaComponent,
    ImageComponent,
    ScrollClassDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected helloIcon: Icon = helloIcon;
  protected whatsappIcon: Icon = whatsappIcon;
  protected downloadIcon: Icon = downloadIcon;

  protected avatarImage: Image = {
    path: './assets/img/avatar.jpg',
    height: '300',
    width: '300',
    altText: 'avatar',
    priority: true,
  };

  public coreTechnologies: string[] = ['Angular', 'Typescript', 'C#', '.NET'];
}
