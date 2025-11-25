import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { projects } from '@core/data/projects-info';

@Directive({
  selector: '[appCarouselItem]',
  standalone: true,
})
export class CarouselItemDirective implements AfterViewInit, OnChanges {
  @Input() appCarouselItem!: number;
  @Input() cardActive!: number;
  protected cardCurrent!: number;
  private static _cardStatus: number;
  private readonly numberOfProjects = projects.length;

  constructor(private readonly element: ElementRef) {
    this.cardStatus = 0;
  }

  ngAfterViewInit() {
    this.cardCurrent = this.appCarouselItem;
    this.cardShow();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['cardActive'].isFirstChange() ||
      changes['cardActive'].currentValue !== changes['cardActive'].previousValue
    ) {
      this.cardShow();
    }
  }

  cardShow() {
    if (this.cardCurrent === this.cardActive) {
      this.element.nativeElement.style.transform = '';
      this.element.nativeElement.style.zIndex = `${this.cardActive}`;
      this.element.nativeElement.style.filter = 'none';
      this.element.nativeElement.style.opacity = '1';
    }

    if (this.cardCurrent > this.cardActive) {
      this.cardStatus = this.cardCurrent - this.cardActive;
      this.applyStyles(1);
    }

    if (this.cardCurrent < this.cardActive) {
      this.cardStatus = this.cardActive - this.cardCurrent;
      this.applyStyles(-1);
    }
  }

  private applyStyles(direction: number) {
    const transformX = 120 * this.cardStatus * direction;
    const scale = 1 - 0.2 * this.cardStatus;
    const perspective = 16;
    const rotateY = direction === 1 ? '-1deg' : '1deg';

    this.element.nativeElement.style.transform = `translateX(${transformX}px) scale(${scale}) perspective(${perspective}px) rotateY(${rotateY})`;
    this.element.nativeElement.style.zIndex = `${this.cardActive - this.cardStatus}`;
    this.element.nativeElement.style.filter = 'blur(5px)';
    this.element.nativeElement.style.opacity = `${this.cardStatus > 2 ? 0 : 0.6}`;
  }

  public set cardStatus(number: number) {
    if (number >= 0 && number <= this.numberOfProjects) {
      CarouselItemDirective._cardStatus = number;
    }
  }

  get cardStatus(): number {
    return CarouselItemDirective._cardStatus;
  }
}
