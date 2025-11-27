import {
  Component,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
} from '@angular/core';
import { LogoComponent } from '@core/layouts/logo/logo.component';
import { SocialMediaComponent } from '@shared/components/social-media/social-media.component';
import { NavbarScrollDirective } from '@core/directives/navbar-scroll.directive';
import { IMenuItem, menuItemsData } from '@core/data/menu';
import { isPlatformBrowser, NgForOf } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [LogoComponent, SocialMediaComponent, NgForOf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  host: { role: 'navigation' },
  hostDirectives: [NavbarScrollDirective],
})
export class MenuComponent implements OnDestroy {
  // Flag para evitar múltiplas navegações/scrolls simultâneos
  private isScrollingProgrammatically = false;
  private readonly HEADER_OFFSET = 100;

  @Input()
  set sectionsToObserve(value: QueryList<ElementRef<HTMLElement>>) {
    // Guard SSR and invalid values
    if (!this.isBrowser) {
      this._sectionsToObserve = value;
      return;
    }

    this.cleanupObservers();
    this._sectionsToObserve = value;

    const observer = this.createObserver();
    if (observer && value?.length) {
      for (const sectionRef of value) {
        const el = sectionRef.nativeElement;
        if (el instanceof Element) {
          observer.observe(el);
        } else {
          console.warn(
            'MenuComponent: Invalid sectionRef.nativeElement for observation.',
            sectionRef
          );
        }
      }

      this.observers.push(observer);
      this.setInitialActiveSection();
    }

    // React to dynamic changes in the QueryList (e.g. *ngIf, lazy sections)
    value?.changes?.pipe(takeUntil(this.destroy$)).subscribe(() => {
      // Slight delay to allow DOM updates before re-observing
      requestAnimationFrame(() => this.recreateObservers());
    });
  }

  isBrowser: boolean;
  activeSection = 'home';
  private observers: IntersectionObserver[] = [];
  private _sectionsToObserve!: QueryList<ElementRef<HTMLElement>>;
  private readonly menuItemsArray: IMenuItem[] = menuItemsData;

  // Cleanup subject for RxJS subscriptions
  private readonly destroy$ = new Subject<void>();

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly ngZone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Resize handler: recreate observers when viewport changes
    if (this.isBrowser) {
      // runOutsideAngular to avoid triggering CD on every resize event
      this.ngZone.runOutsideAngular(() => {
        const win = globalThis.window ?? globalThis;
        fromEvent(win, 'resize')
          .pipe(debounceTime(120), takeUntil(this.destroy$))
          .subscribe(() =>
            requestAnimationFrame(() => this.recreateObservers())
          );
      });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.cleanupObservers();
  }

  // Convert to getter to avoid function calls from template on each CD
  get menuItems() {
    return this.menuItemsArray;
  }

  protected isActive(url?: string): boolean {
    return this.activeSection === url;
  }

  private cleanupObservers() {
    for (const observer of this.observers) observer.disconnect();
    this.observers = [];
  }

  private recreateObservers() {
    // Recreate observers using the currently stored QueryList
    if (!this.isBrowser || !this._sectionsToObserve?.length) return;

    this.cleanupObservers();

    const observer = this.createObserver();
    if (!observer) return;

    for (const sectionRef of this._sectionsToObserve) {
      const el = sectionRef.nativeElement;
      if (el instanceof Element) observer.observe(el);
    }

    this.observers.push(observer);
    this.setInitialActiveSection();
  }

  private createObserver(): IntersectionObserver | null {
    const win = globalThis.window ?? globalThis;
    if (!this.isBrowser) return null;

    if (!('IntersectionObserver' in win)) {
      // Feature not available; skip creating the observer (fallback can be implemented)
      console.warn('IntersectionObserver not supported in this environment.');
      return null;
    }

    const HEADER_HEIGHT = this.HEADER_OFFSET;
    const innerHeight = win.innerHeight || 0;

    // Create observer outside Angular to reduce CD cycles
    let io: IntersectionObserver | null = null;
    this.ngZone.runOutsideAngular(() => {
      io = new IntersectionObserver(
        entries => {
          // Compute active section without triggering Angular change detection here
          let currentActiveSection: string | null = null;
          let minTop = Infinity;

          for (const entry of entries) {
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
          }

          // Only re-enter Angular zone when we need to update bindings
          const nextActive =
            currentActiveSection ?? this.fallbackActiveSection();
          if (nextActive !== this.activeSection) {
            this.ngZone.run(() => (this.activeSection = nextActive));
          }
        },
        {
          rootMargin: `-${HEADER_HEIGHT}px 0px -${innerHeight * 0.95}px 0px`,
          threshold: 0,
        }
      );
    });

    return io;
  }

  private fallbackActiveSection(): string {
    if (!this.isBrowser) return 'home';
    const win = globalThis.window ?? globalThis;
    const scrollTop = win.scrollY || document.documentElement.scrollTop;
    return scrollTop < 150 ? 'home' : this.activeSection;
  }

  private setInitialActiveSection() {
    if (!this.isBrowser || !this._sectionsToObserve?.length) return;

    const win = globalThis.window ?? globalThis;
    const visibleSection = this._sectionsToObserve.find(ref => {
      const rect = ref.nativeElement.getBoundingClientRect();
      // Consider HEADER_OFFSET so the visible check matches where content will be after scroll
      return (
        rect.top < win.innerHeight - this.HEADER_OFFSET &&
        rect.bottom > this.HEADER_OFFSET
      );
    });

    this.activeSection = visibleSection?.nativeElement.id ?? 'home';
  }

  // Intercepta clique nos links do menu para fazer scroll suave controlado
  onMenuClick(url: string, event: MouseEvent) {
    // preserva comportamento (e acessibilidade) fora do browser/SSR
    if (!this.isBrowser) return;

    // Se o usuário usou tecla modificadora ou botão diferente do esquerdo, permita o comportamento padrão (abrir em nova aba etc.)
    if (
      event instanceof MouseEvent &&
      (event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey)
    ) {
      return;
    }
    event.preventDefault();

    if (this.isScrollingProgrammatically) return;

    const win = globalThis.window ?? globalThis;
    const target = win.document.getElementById(url);

    // Se não há elemento, apenas atualiza o hash e retorna
    if (!target) {
      try {
        win.history.pushState(null, '', `#${url}`);
      } catch {
        win.location.hash = `#${url}`;
      }
      return;
    }

    this.isScrollingProgrammatically = true;

    // Observador temporário para detectar quando o elemento entra na viewport
    const offset = url === 'home' ? this.HEADER_OFFSET : 0;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            obs.disconnect();
            this.isScrollingProgrammatically = false;
            // marca a seção ativa imediatamente
            this.ngZone.run(() => (this.activeSection = url));
            break;
          }
        }
      },
      { rootMargin: `-${offset}px 0px 0px 0px`, threshold: 0.1 }
    );

    observer.observe(target);

    // Inicia scroll suave com offset (especialmente para 'home' precisa -100px)
    try {
      const rectTop = target.getBoundingClientRect().top;
      const currentScroll =
        (win as any).scrollY ??
        win.pageYOffset ??
        document.documentElement.scrollTop;
      let targetY = Math.round(currentScroll + rectTop - offset);
      if (targetY < 0) targetY = 0;
      try {
        win.scrollTo({ top: targetY, behavior: 'smooth' });
      } catch {
        // browsers that don't support smooth option
        win.scrollTo(0, targetY);
      }
      // Atualiza fragment sem forçar jump
      try {
        win.history.pushState(null, '', `#${url}`);
      } catch {
        /* ignore */
      }
    } catch {
      // fallback instantâneo
      target.scrollIntoView();
      observer.disconnect();
      this.isScrollingProgrammatically = false;
    }
    // Safety timeout in case IntersectionObserver doesn't fire (e.g., very small viewport)
    setTimeout(() => {
      if (this.isScrollingProgrammatically) {
        this.isScrollingProgrammatically = false;
        try {
          observer.disconnect();
        } catch {
          //
        }
      }
    }, 2000);
  }
}
