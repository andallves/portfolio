import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LogoComponent } from '#core/components/logo/logo.component';
import { MenuComponent } from '#core/components/menu/menu.component';
import { Icon } from '#core/models/entities/icon';
import { Image } from '#core/models/entities/image';
import { SocialMediaComponent } from '#shared/components/social-media/social-media.component';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { ButtonDefaultComponent } from '#shared/components/button-default/button-default.component';
import { ButtonSecondaryComponent } from '#shared/components/button-secondary/button-secondary.component';
import { ImageComponent } from '#shared/components/image/image.component';
import { downloadIcon, helloIcon, whatsappIcon } from '#core/data/icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    SocialMediaComponent,
    LogoComponent,
    NgOptimizedImage,
    CustomTextComponent,
    ButtonDefaultComponent,
    MenuComponent,
    ButtonSecondaryComponent,
    ImageComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected helloIcon: Icon = helloIcon;
  protected whatsappIcon: Icon = whatsappIcon;
  protected downloadIcon: Icon = downloadIcon;

  protected avatarImage: Image = {
    path: './assets/avatar.jpg',
    height: '300',
    width: '300',
    altText: 'avatar',
    priority: true,
  };
}
