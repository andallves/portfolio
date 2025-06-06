import { Component } from '@angular/core';
import { CustomTextComponent } from '@shared/components/custom-text/custom-text.component';
import { NgOptimizedImage } from '@angular/common';
import { Icon } from 'src/app/core/models/entities/icon';
import { Image } from 'src/app/core/models/entities/image';
import { ImageComponent } from '@shared/components/image/image.component';
import { HeadingComponent } from '@shared/components/heading/heading.component';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { headingIcon } from '@core/data/icons';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';
import { aboutImage } from '@core/data/images';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CustomTextComponent,
    NgOptimizedImage,
    ImageComponent,
    LoadingComponent,
    HeadingComponent,
    ScrollClassDirective,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  headingIcon: Icon = headingIcon;
  aboutImage: Image = aboutImage;
}
