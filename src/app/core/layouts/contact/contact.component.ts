import { Component } from '@angular/core';
import { HeadingComponent } from '#shared/components/heading/heading.component';
import { ButtonDefaultComponent } from '#shared/components/button-default/button-default.component';
import { ButtonSecondaryComponent } from '#shared/components/button-secondary/button-secondary.component';
import { Icon } from '#core/models/entities/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeadingComponent, ButtonDefaultComponent, ButtonSecondaryComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactIcon: Icon = {
    path: './assets/contact.png',
    width: '22',
    height: '22',
    altText: 'whatsapp icone',
  };
  whatsappIcon: Icon = {
    path: './assets/whatsapp.png',
    width: '22',
    height: '22',
    altText: 'whatsapp icone',
  };
  emailIcon: Icon = {
    path: './assets/email.png',
    width: '22',
    height: '22',
    altText: 'whatsapp icone',
  };
  upArrow: Icon = {
    path: './assets/up-arrow.png',
    width: '22',
    height: '22',
    altText: 'seta para cima icone',
  };
}
