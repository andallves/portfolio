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
  private removeTimeout?: NodeJS.Timeout | null = null;
  private fallbackRafId?: number | null = null;
  private lastIsVisible = false;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    // Preferir IntersectionObserver para desempenho
    if (
      typeof globalThis.window !== 'undefined' &&
      'IntersectionObserver' in globalThis.window
    ) {
      this.observer = new IntersectionObserver(
        entries => entries.forEach(entry => this.handleEntry(entry)),
        {
          root: null,
          // thresholds: 0 (out) and 0.01 (small visibility) and 1 (fully visible) helps decisões
          threshold: [0, 0.01, 1],
        }
      );

      this.observer.observe(this.elementRef.nativeElement);
    } else {
      // Fallback leve: usa requestAnimationFrame para checar bounding box sem sobrecarregar scroll
      const check = () => {
        this.checkBounding();
        this.fallbackRafId = window.requestAnimationFrame(check);
      };
      this.fallbackRafId = window.requestAnimationFrame(check);
    }

    // Run an initial check to set correct classes right away
    this.checkBounding();
  }

  private handleEntry(entry: IntersectionObserverEntry) {
    // entry.intersectionRatio === 0 significa que está totalmente fora do viewport
    const isVisible = entry.intersectionRatio > 0;
    this.applyVisibility(isVisible);
  }

  // Fallback path: calcula manualmente se o elemento está visível
  private checkBounding() {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Considera visível se alguma parte do elemento estiver dentro do viewport
    const isVisible = rect.bottom > 0 && rect.top < viewportHeight;
    this.applyVisibility(isVisible);
  }

  private applyVisibility(isVisible: boolean) {
    // Se já estamos no mesmo estado, não reiniciamos timeouts
    if (isVisible) {
      this.cancelRemove();
      if (!this.lastIsVisible) {
        // Entrou no viewport: mostra imediatamente
        this.renderer.addClass(this.elementRef.nativeElement, 'show');
        this.renderer.removeClass(this.elementRef.nativeElement, 'hidden');
        this.lastIsVisible = true;
      }
    } else {
      // Saiu do viewport: agenda esconder após `delay` ms, garantindo que esteja totalmente fora
      if (this.lastIsVisible || this.removeTimeout == null) {
        this.scheduleRemove();
      }
      this.lastIsVisible = false;
    }
  }

  private scheduleRemove() {
    if (this.removeTimeout != null) return; // já agendado

    this.removeTimeout = globalThis.setTimeout(() => {
      // Ao disparar, revalida bounding (proteção contra estados transitórios)
      const rect = this.elementRef.nativeElement.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const outTop = rect.bottom <= 0;
      const outBottom = rect.top >= viewportHeight;

      if (outTop || outBottom) {
        this.renderer.removeClass(this.elementRef.nativeElement, 'show');
        this.renderer.addClass(this.elementRef.nativeElement, 'hidden');
      }

      // limpa timeout
      if (this.removeTimeout) {
        clearTimeout(this.removeTimeout);
      }
      this.removeTimeout = null;
    }, this.delay);
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
    if (this.fallbackRafId != null) {
      window.cancelAnimationFrame(this.fallbackRafId);
      this.fallbackRafId = null;
    }
    this.cancelRemove();
  }
}
