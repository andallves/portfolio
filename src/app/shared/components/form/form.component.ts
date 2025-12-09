import { Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  readonly formGroup = input.required<FormGroup>();
  readonly isLoading = input(false);
  readonly submit = input<() => void>();
  readonly submitBtn = output<Event>();

  onSubmit(event: Event) {
    this.submitBtn.emit(event);
  }
}
