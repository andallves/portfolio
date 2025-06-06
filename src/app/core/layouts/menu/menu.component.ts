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
  host: { role: 'navigation' },
  hostDirectives: [NavbarScrollDirective],
})
export class MenuComponent implements OnDestroy {
  @Input()
  set sectionsToObserve(value: QueryList<ElementRef<HTMLElement>>) {
    if (!this.isBrowser || !value?.length) return;

    this.cleanupObservers();
    this._sectionsToObserve = value;

    const observer = this.createObserver();
    value.forEach(sectionRef => {
      const el = sectionRef.nativeElement;
      if (el instanceof Element) {
        observer.observe(el);
      } else {
        console.warn(
          'MenuComponent: Invalid sectionRef.nativeElement for observation.',
          sectionRef
        );
      }
    });

    this.observers.push(observer);
    this.setInitialActiveSection();
  }

  isBrowser: boolean;
  activeSection = 'home';
  private observers: IntersectionObserver[] = [];
  private _sectionsToObserve!: QueryList<ElementRef<HTMLElement>>;
  readonly menuItemsArray: MenuItem[] = menuItemsData;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnDestroy() {
    this.cleanupObservers();
  }

  menuItems() {
    return this.menuItemsArray;
  }

  protected isActive(url?: string): boolean {
    return this.activeSection === url;
  }

  private cleanupObservers() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }

  private createObserver(): IntersectionObserver {
    const HEADER_HEIGHT = 200;
    return new IntersectionObserver(
      entries => {
        let currentActiveSection: string | null = null;
        let minTop = Infinity;

        entries.forEach(entry => {
          const { id } = entry.target as HTMLElement;
          const rect = entry.target.getBoundingClientRect();

          if (
            entry.isIntersecting &&
            rect.top <= HEADER_HEIGHT &&
            rect.bottom >= HEADER_HEIGHT &&
            rect.top < minTop
          ) {
            minTop = rect.top;
            currentActiveSection = id;
          }
        });

        this.activeSection =
          currentActiveSection ?? this.fallbackActiveSection();
      },
      {
        rootMargin: `-${HEADER_HEIGHT}px 0px -${window.innerHeight * 0.95}px 0px`,
        threshold: 0,
      }
    );
  }

  private fallbackActiveSection(): string {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return scrollTop < 150 ? 'home' : this.activeSection;
  }

  private setInitialActiveSection() {
    const visibleSection = this._sectionsToObserve.find(ref => {
      const rect = ref.nativeElement.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });

    this.activeSection = visibleSection?.nativeElement.id ?? 'home';
  }
}
