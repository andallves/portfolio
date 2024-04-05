import { Component, ElementRef, inject, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ProjectCardComponent } from '#core/layouts/projects/components/project-card/project-card.component';
import { ButtonSecondaryComponent } from '#shared/components/button-secondary/button-secondary.component';
import { ResponseOptions } from '#core/models/entities/carousel';
import { ProjectCard } from '#core/models/entities/project-card';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ProjectCardComponent, ButtonSecondaryComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() projects!: Array<ProjectCard>;

  responsiveOptions!: Array<ResponseOptions>;
  protected el: ElementRef = inject(ElementRef);

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  emphaseCard() {
    this.el.nativeElement.style.backgroundColor = '#ffsfs';
  }
}
