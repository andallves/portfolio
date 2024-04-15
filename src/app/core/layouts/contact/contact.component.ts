import { Component } from '@angular/core';
import { HeadingComponent } from '#shared/components/heading/heading.component';
import { ButtonDefaultComponent } from '#shared/components/button-default/button-default.component';
import { ButtonSecondaryComponent } from '#shared/components/button-secondary/button-secondary.component';
import { Icon } from '#core/models/entities/icon';
import { LoadingComponent } from '#shared/components/loading/loading.component';
import {
  contactIcon,
  emailIcon,
  upArrow,
  whatsappIcon,
} from '#core/data/icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeadingComponent,
    ButtonDefaultComponent,
    ButtonSecondaryComponent,
    LoadingComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactIcon: Icon = contactIcon;
  whatsappIcon: Icon = whatsappIcon;
  emailIcon: Icon = emailIcon;
  upArrow: Icon = upArrow;
}
