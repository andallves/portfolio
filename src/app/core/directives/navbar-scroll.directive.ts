import {
  Directive,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

type WindowLike = Window & { scrollY?: number };

@Directive({
  selector: '[appNavbarScroll]',
  standalone: true,
})
export class NavbarScrollDirective implements OnInit, OnDestroy {
  private isBrowser = false;
  private lastScrolled = false;
  private rafScheduled = false;
  private readonly destroy$ = new Subject<void>();

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    private readonly ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (!this.isBrowser) return;

    const win =
      (globalThis as unknown as { window?: WindowLike }).window ??
      (globalThis as unknown as WindowLike);

    // Define o estado inicial (caso a página seja carregada com scroll)
    this.updateNavbarClass((win.scrollY ?? 0) > 60);

    // Listen to scroll and resize outside Angular to avoid frequent CD cycles
    this.ngZone.runOutsideAngular(() => {
      fromEvent(win, 'scroll', { passive: true })
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.scheduleUpdate());

      fromEvent(win, 'resize', { passive: true })
        .pipe(debounceTime(120), takeUntil(this.destroy$))
        .subscribe(() => this.scheduleUpdate(true));
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Agenda uma atualização com requestAnimationFrame (evita thrashing)
  private scheduleUpdate(force = false): void {
    if (this.rafScheduled && !force) return;
    this.rafScheduled = true;

    requestAnimationFrame(() => {
      try {
        const win =
          (globalThis as unknown as { window?: WindowLike }).window ??
          (globalThis as unknown as WindowLike);
        const scrolled = (win.scrollY ?? 0) > 60;
        if (force || scrolled !== this.lastScrolled) {
          this.updateNavbarClass(scrolled);
          this.lastScrolled = scrolled;
        }
      } finally {
        this.rafScheduled = false;
      }
    });
  }

  private updateNavbarClass(scrolled: boolean): void {
    const element = this.el.nativeElement;
    if (scrolled) {
      this.renderer.addClass(element, 'scrolled');
    } else {
      this.renderer.removeClass(element, 'scrolled');
    }
  }
}
