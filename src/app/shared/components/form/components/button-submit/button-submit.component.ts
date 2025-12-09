import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  standalone: true,
  imports: [],
  templateUrl: './button-submit.component.html',
  styleUrl: './button-submit.component.scss',
})
export class ButtonSubmitComponent {
  isLoading = input(false);
  disabled = input(false);
  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
