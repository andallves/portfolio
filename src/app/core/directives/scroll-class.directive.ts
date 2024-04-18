import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollClass]',
  standalone: true,
})
export class ScrollClassDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = this.elementRef.nativeElement;
    const elementRect = element.getBoundingClientRect();
    const isVisible =
      elementRect.top >= -50 &&
      elementRect.bottom <=
        (window.innerHeight + 20 || document.documentElement.clientHeight + 20);

    if (isVisible) {
      this.renderer.addClass(element, 'show');
      this.renderer.removeClass(element, 'hidden');
    } else {
      this.renderer.removeClass(element, 'show');
      this.renderer.addClass(element, 'hidden');
    }
  }
}
