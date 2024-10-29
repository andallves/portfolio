import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '@core/layouts/header/header.component';
import { CustomTextComponent } from '@shared/components/custom-text/custom-text.component';
import { AboutMeComponent } from '@core/layouts/about-me/about-me.component';
import { ProjectsComponent } from '@core/layouts/projects/projects.component';
import { EmphasisComponent } from '@core/layouts/emphasis/emphasis.component';
import { TechnologiesComponent } from '@core/layouts/technologies/technologies.component';
import { FooterComponent } from '@core/layouts/footer/footer.component';
import { TrajectoryComponent } from '@core/layouts/trajectory/trajectory.component';
import { ContactComponent } from '@core/layouts/contact/contact.component';
import { DividerComponent } from '@shared/components/divider/divider.component';

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
    TrajectoryComponent,
    ContactComponent,
    DividerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Andre Alves - Portfólio';
}
