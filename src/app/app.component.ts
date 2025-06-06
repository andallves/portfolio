import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from 'src/app/features/home/home.component';
import { CustomTextComponent } from '@shared/components/custom-text/custom-text.component';
import { AboutMeComponent } from 'src/app/features/about-me/about-me.component';
import { ProjectsComponent } from 'src/app/features/projects/projects.component';
import { EmphasisComponent } from '@core/layouts/emphasis/emphasis.component';
import { SkillsComponent } from 'src/app/features/skills/skills.component';
import { FooterComponent } from '@core/layouts/footer/footer.component';
import { CareerComponent } from 'src/app/features/career/career.component';
import { ContactComponent } from 'src/app/features/contact/contact.component';
import { DividerComponent } from '@shared/components/divider/divider.component';
import { MenuComponent } from '@core/layouts/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    CustomTextComponent,
    MatIconModule,
    AboutMeComponent,
    ProjectsComponent,
    EmphasisComponent,
    SkillsComponent,
    FooterComponent,
    CareerComponent,
    ContactComponent,
    DividerComponent,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'Andre Alves - Portfólio';

  @ViewChildren('sectionRef', { read: ElementRef })
  sectionsToObserve!: QueryList<ElementRef<HTMLElement>>;

  constructor(private readonly cdr: ChangeDetectorRef) {} // <-- Injete aqui

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
