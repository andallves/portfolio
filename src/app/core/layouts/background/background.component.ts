import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { Brain, LucideAngularModule } from 'lucide-angular';
import { isPlatformBrowser, NgForOf } from '@angular/common';

const SMALL_SCREEN = 480;
const MEDIUM_SCREEN = 768;
const LARGE_SCREEN = 991;

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [LucideAngularModule, NgForOf],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
  host: {
    role: 'section',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent implements OnInit {
  readonly brainIcon = Brain;
  readonly brainColor = '#0FB5C8';
  private readonly numberOfBrainIcon = signal(8);
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  brainParticles = Array(this.numberOfBrainIcon()).fill(0);

  ngOnInit() {
    this.generateParticles();
    this.onResize();
  }

  getRandomStyle() {
    return {
      '--translateY': `${Math.random() * 100 + 5}px`,
      '--duration': `${Math.random() * 5 + 10}s`,
    };
  }

  generateParticles() {
    this.brainParticles = Array.from({
      length: this.numberOfBrainIcon(),
    }).map(() => ({
      left: `${Math.random() * 100}`,
      top: `${Math.random() * 100}`,
    }));
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.isBrowser) return;

    const screen = window.innerWidth;

    if (screen < SMALL_SCREEN) {
      this.numberOfBrainIcon.set(8);
    } else if (screen < MEDIUM_SCREEN) {
      this.numberOfBrainIcon.set(12);
    } else if (screen < LARGE_SCREEN) {
      this.numberOfBrainIcon.set(16);
    } else {
      this.numberOfBrainIcon.set(20);
    }
  }
}
