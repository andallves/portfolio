import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '@core/layouts/logo/logo.component';
import { SocialMediaComponent } from '@shared/components/social-media/social-media.component';
import { NavbarScrollDirective } from '@core/directives/navbar-scroll.directive';
import { menuItemsData } from '@core/data/menu';
import { isPlatformBrowser, NgForOf } from '@angular/common';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    LogoComponent,
    SocialMediaComponent,
    RouterLink,
    RouterLinkActive,
    NgForOf,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  host: {
    role: 'navigation',
  },
  hostDirectives: [NavbarScrollDirective],
})
export class MenuComponent implements OnDestroy {
  isBrowser: boolean;
  activeSection: string = 'home';
  private observers: IntersectionObserver[] = [];
  _sectionsToObserve!: QueryList<ElementRef<HTMLElement>>;

  @Input()
  set sectionsToObserve(value: QueryList<ElementRef<HTMLElement>>) {
    if (!this.isBrowser || !value) return;
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this._sectionsToObserve = value;

    if (this._sectionsToObserve.length > 0) {
      this._sectionsToObserve.forEach(sectionRef => {
        if (sectionRef && sectionRef.nativeElement instanceof Element) {
          const HEADER_HEIGHT = 100;
          const observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                const sectionId = entry.target.id;
                const rect = entry.target.getBoundingClientRect();

                if (
                  entry.isIntersecting &&
                  rect.top <= HEADER_HEIGHT &&
                  rect.bottom >= HEADER_HEIGHT
                ) {
                  this.activeSection = sectionId;
                } else if (this.activeSection === sectionId) {
                  if (rect.top > HEADER_HEIGHT || rect.bottom < 0) {
                    this.activeSection = '';
                  }
                }
              });
            },
            {
              rootMargin: `-${HEADER_HEIGHT}px 0px -${window.innerHeight * 0.8}px 0px`,
              threshold: 0,
            }
          );

          observer.observe(sectionRef.nativeElement);
          this.observers.push(observer);
        }
      });
    }
  }

  menuItemsArray: MenuItem[] = menuItemsData;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnDestroy() {
    this.observers.forEach(observer => observer.disconnect());
  }

  menuItems() {
    return this.menuItemsArray;
  }

  protected isActive(url?: string): boolean {
    return this.activeSection === url;
  }
}
