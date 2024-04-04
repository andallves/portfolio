import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from 'src/app/core/layouts/header/header.component';
import { CustomTextComponent } from 'src/app/shared/components/custom-text/custom-text.component';
import { AboutMeComponent } from 'src/app/core/layouts/about-me/about-me.component';
import { ProjectsComponent } from 'src/app/core/layouts/projects/projects.component';
import { EmphasisComponent } from 'src/app/core/layouts/emphasis/emphasis.component';
import { TechnologiesComponent } from 'src/app/core/layouts/technologies/technologies.component';
import { FooterComponent } from 'src/app/core/layouts/footer/footer.component';
import { CareerComponent } from 'src/app/core/layouts/career/career.component';
import { ContactComponent } from 'src/app/core/layouts/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CustomTextComponent,
    MatIconModule,
    AboutMeComponent,
    ProjectsComponent,
    EmphasisComponent,
    TechnologiesComponent,
    FooterComponent,
    CareerComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Andre Alves - Portfólio';
}
