import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appNavbarScroll]',
  standalone: true,
})
export class NavbarScrollDirective implements OnInit {
  private isBrowser = false;
  private lastScrolled = false;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      // Define o estado inicial (caso a página seja carregada com scroll)
      this.updateNavbarClass(window.scrollY > 60);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (!this.isBrowser) return;

    const scrolled = window.scrollY > 60;
    // Evita operações desnecessárias se o estado não mudou
    if (scrolled !== this.lastScrolled) {
      this.updateNavbarClass(scrolled);
      this.lastScrolled = scrolled;
    }
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
