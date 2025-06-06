import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appNavbarScroll]',
  standalone: true,
})
export class NavbarScrollDirective implements OnInit {
  private readonly isScrolled = signal<boolean>(false);

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onScroll();
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    const element = this.el.nativeElement;
    this.isScrolled.set(window.scrollY > 60);

    if (this.isScrolled()) {
      this.renderer.addClass(element, 'scrolled');
    } else {
      this.renderer.removeClass(element, 'scrolled');
    }
  }
}
