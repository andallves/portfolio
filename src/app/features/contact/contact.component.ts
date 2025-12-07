import { Component } from '@angular/core';
import { HeadingComponent } from '@shared/components/heading/heading.component';
import { Icon } from '@core/models/entities/icon';
import { contactIcon, emailIcon, whatsappIcon } from '@core/data/icons';
import { BackToTopComponent } from '@shared/components/back-to-top/back-to-top.component';
import { FormComponent } from '@shared/components/form/form.component';
import { SocialMediaComponent } from '@shared/components/social-media/social-media.component';
import { ButtonSecondaryComponent } from '@shared/components/button-secondary/button-secondary.component';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeadingComponent,
    BackToTopComponent,
    FormComponent,
    SocialMediaComponent,
    ButtonSecondaryComponent,
    ScrollClassDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactIcon: Icon = contactIcon;
  whatsappIcon: Icon = whatsappIcon;
  emailIcon: Icon = emailIcon;
}
