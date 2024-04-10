import { animate, style, transition, trigger } from '@angular/animations';

export const zoomInAnimation = trigger('zoomIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0)' }),
    animate('1s', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'scale(1)' }),
    animate('1s', style({ opacity: 0, transform: 'scale(0)' })),
  ]),
]);
