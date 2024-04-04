import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LogoComponent } from 'src/app/core/components/logo/logo.component';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';
import { Icon } from 'src/app/core/models/entities/icon';
import { Image } from 'src/app/core/models/entities/image';
import { SocialMediaComponent } from 'src/app/shared/components/social-media/social-media.component';
import { CustomTextComponent } from 'src/app/shared/components/custom-text/custom-text.component';
import { ButtonDefaultComponent } from 'src/app/shared/components/button-default/button-default.component';
import { ButtonSecondaryComponent } from 'src/app/shared/components/button-secondary/button-secondary.component';
import { ImageComponent } from 'src/app/shared/components/image/image.component';

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
  helloIcon: Icon = {
    pathIcon: './assets/hand.png',
    width: '22',
    height: '22',
    altText: 'olá',
  };

  whatsappIcon: Icon = {
    pathIcon: './assets/whatsapp.png',
    width: '22',
    height: '22',
    altText: 'whatsapp icone',
  };

  downloadIcon: Icon = {
    pathIcon: './assets/download.png',
    width: '22',
    height: '22',
    altText: 'Baixar icone',
  };

  image: Image = {
    pathImage: './assets/avatar.jpg',
    height: '300',
    width: '300',
    altText: 'avatar',
    priority: true,
  };
}
