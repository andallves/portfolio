import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from 'src/app/features/home/home.component';
import { AboutMeComponent } from 'src/app/features/about-me/about-me.component';
import { ProjectsComponent } from 'src/app/features/projects/projects.component';
import { EmphasisComponent } from '@core/layouts/emphasis/emphasis.component';
import { SkillsComponent } from 'src/app/features/skills/skills.component';
import { FooterComponent } from '@core/layouts/footer/footer.component';
import { CareerComponent } from 'src/app/features/career/career.component';
import { ContactComponent } from 'src/app/features/contact/contact.component';
import { MenuComponent } from '@core/layouts/menu/menu.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    MatIconModule,
    AboutMeComponent,
    ProjectsComponent,
    EmphasisComponent,
    SkillsComponent,
    FooterComponent,
    CareerComponent,
    ContactComponent,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'Andre Alves - Portfólio';

  @ViewChildren('sectionRef', { read: ElementRef })
  sectionsToObserve!: QueryList<ElementRef<HTMLElement>>;
  isBrowser: boolean;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId); // <-- Inicialize aqui
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();

    if (this.isBrowser) {
      // Isso forçará a página a ir para o topo absoluto após o carregamento
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1); // Um pequeno delay para o navegador se assentar
    }
  }
}
