import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CarouselItem } from '#core/models/entities/carousel';

@Directive({
  selector: '[appCarouselItem]',
  standalone: true,
})
export class CarouselItemDirective implements AfterViewInit, OnChanges {
  @Input() appCarouselItem!: CarouselItem;
  activeCard!: number;
  carouselCard!: number;
  private static _status: number = 3;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.activeCard = this.appCarouselItem.active;
    // console.log('card active: ' + this.activeCard);
    this.carouselCard = this.appCarouselItem.id;
    // console.log('carouselCard:  ' + this.carouselCard);
    // console.log('status inicializado com: ' + this.status);
    this.loadCarousel();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      (changes['appCarouselItem'].currentValue as CarouselItem).active !==
      this.activeCard
    ) {
      this.loadCarousel();
    }
  }

  loadCarousel() {
    console.log('carouselCard' + this.carouselCard);
    if (this.carouselCard === this.activeCard) {
      console.log(this.carouselCard);
      this.element.nativeElement.style.zIndex = `${this.activeCard}`;
      this.element.nativeElement.style.filter = 'none';
      this.element.nativeElement.style.opacity = '1';
    } else if (this.carouselCard < this.activeCard) {
      this.element.nativeElement.style.transform = `translateX(${-120 * this.status}px) scale(${1 - 0.2 * this.status}) perspective(16px) rotateY(1deg)`;
      console.log('status: ' + this.status);
      this.element.nativeElement.style.zIndex = `${this.activeCard - this.status}`;
      console.log(`index: ${this.activeCard - this.status}`);
      this.element.nativeElement.style.filter = 'blur(5px)';
      this.element.nativeElement.style.opacity = `${this.status > 2 ? 0 : 0.6}`;
      this.status -= 1;
    } else if (this.carouselCard > this.activeCard) {
      this.status += 1;
      this.element.nativeElement.style.transform = `translateX(${120 * this.status}px) scale(${1 - 0.2 * this.status}) perspective(16px) rotateY(-1deg)`;
      this.element.nativeElement.style.zIndex = `${this.activeCard - this.status}`;
      this.element.nativeElement.style.filter = 'blur(5px)';
      this.element.nativeElement.style.opacity = `${this.status > 2 ? 0 : 0.6}`;
    }
  }

  public set status(number: number) {
    if (number >= 0 && number <= 7) {
      CarouselItemDirective._status = number;
      return;
    }
    return;
  }

  get status(): number {
    return CarouselItemDirective._status;
  }
}
