import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '#core/layouts/header/header.component';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { AboutMeComponent } from '#core/layouts/about-me/about-me.component';
import { ProjectsComponent } from '#core/layouts/projects/projects.component';
import { EmphasisComponent } from '#core/layouts/emphasis/emphasis.component';
import { TechnologiesComponent } from '#core/layouts/technologies/technologies.component';
import { FooterComponent } from '#core/layouts/footer/footer.component';
import { CareerComponent } from '#core/layouts/career/career.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Andre Alves - Portfólio';
}
