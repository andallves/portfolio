import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollClass]',
  standalone: true,
})
export class ScrollClassDirective implements AfterViewInit, OnDestroy {
  // tempo em ms que o elemento precisa permanecer fora do viewport antes de aplicar 'hidden'
  @Input('appScrollClassDelay') delay = 120;

  private observer?: IntersectionObserver;
  private removeTimeout?: number | null = null;
  private fallbackRafId?: number | null = null;
  private lastIsVisible = false;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const win = (globalThis as any).window;
    const hasWindow = typeof win !== 'undefined' && win !== null;

    if (hasWindow && 'IntersectionObserver' in win) {
      this.observer = new IntersectionObserver(
        entries => entries.forEach(entry => this.handleEntry(entry)),
        {
          root: null,
          threshold: [0, 0.01, 1],
        }
      );
      this.observer.observe(this.elementRef.nativeElement);
    } else if (hasWindow && typeof win.requestAnimationFrame === 'function') {
      const check = () => {
        this.checkBounding();
        this.fallbackRafId = win.requestAnimationFrame(check);
      };
      this.fallbackRafId = win.requestAnimationFrame(check);
    } else {
      return;
    }

    if (hasWindow) this.checkBounding();
  }

  private handleEntry(entry: IntersectionObserverEntry) {
    const fullyOut = entry.intersectionRatio === 0;
    if (fullyOut) {
      this.scheduleRemove();
      this.lastIsVisible = false;
    } else {
      this.applyVisibility();
    }
  }

  // Fallback path: calcula manualmente se o elemento está visível
  private checkBounding() {
    const win = (globalThis as any).window;
    if (typeof win !== 'undefined' || win == null) return;

    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document?.documentElement.clientHeight || 0;
    const fullyOutTop = rect.bottom <= 0;
    const fullyOutBottom = rect.top >= viewportHeight;

    if (fullyOutTop || fullyOutBottom) {
      this.scheduleRemove();
      this.lastIsVisible = false;
    } else {
      this.applyVisibility();
    }
  }

  private applyVisibility() {
    this.cancelRemove();
    if (!this.lastIsVisible) {
      this.renderer.addClass(this.elementRef.nativeElement, 'show');
      this.renderer.removeClass(this.elementRef.nativeElement, 'hidden');
      this.lastIsVisible = true;
    }
  }

  private scheduleRemove() {
    if (this.removeTimeout != null) return; // já agendado

    this.removeTimeout = (globalThis as any).setTimeout(() => {
      const win = (globalThis as any).window;
      const viewportHeight = win
        ? win.innerHeight || document?.documentElement.clientHeight || 0
        : 0;
      const rect = this.elementRef.nativeElement.getBoundingClientRect();
      const outTop = rect.bottom <= 0;
      const outBottom = rect.top >= viewportHeight;

      if (outTop || outBottom) {
        this.renderer.removeClass(this.elementRef.nativeElement, 'show');
        this.renderer.addClass(this.elementRef.nativeElement, 'hidden');
      }

      if (this.removeTimeout != null) {
        (globalThis as any).clearTimeout(this.removeTimeout);
      }
      this.removeTimeout = null;
    }, this.delay) as unknown as number;
  }

  private cancelRemove() {
    if (this.removeTimeout != null) {
      clearTimeout(this.removeTimeout);
      this.removeTimeout = null;
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
    const win = (globalThis as any).window;
    if (
      this.fallbackRafId != null &&
      win &&
      typeof win.cancelAnimationFrame === 'function'
    ) {
      win.cancelAnimationFrame(this.fallbackRafId);
      this.fallbackRafId = null;
    }
    this.cancelRemove();
  }
}
