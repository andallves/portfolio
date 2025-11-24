import { Component, OnInit, Renderer2 } from '@angular/core';
import { ButtonSecondaryComponent } from '../button-secondary/button-secondary.component';
import { Icon } from '@core/models/entities/icon';
import { upArrow } from '@core/data/icons';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [ButtonSecondaryComponent],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss',
})
export class BackToTopComponent implements OnInit {
  showButton = false;
  upArrow: Icon = upArrow;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen('window', 'scroll', () => {
      this.showButton = window.scrollY > 100;
    });
  }

  backToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}
