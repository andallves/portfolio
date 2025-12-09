import { Component } from '@angular/core';
import { Icon } from 'src/app/core/models/entities/icon';
import { Image } from 'src/app/core/models/entities/image';
import { ImageComponent } from '@shared/components/image/image.component';
import { HeadingComponent } from '@shared/components/heading/heading.component';
import { downloadIcon, headingIcon } from '@core/data/icons';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';
import { aboutImage } from '@core/data/images';
import { ButtonSecondaryComponent } from '@shared/components/button-secondary/button-secondary.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    ImageComponent,
    HeadingComponent,
    ScrollClassDirective,
    ButtonSecondaryComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  headingIcon: Icon = headingIcon;
  aboutImage: Image = aboutImage;
  protected readonly downloadIcon = downloadIcon;
}
