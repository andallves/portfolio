import {
  Component,
  computed,
  ElementRef,
  forwardRef,
  HostListener,
  inject,
  input,
  output,
} from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { IdGeneratorService } from '@shared/components/utils/id-generator.service';

export type InputType = 'text' | 'number' | 'email' | 'password';

@Component({
  selector: 'app-input-custom',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCustomComponent),
      multi: true,
    },
  ],
  templateUrl: './input-custom.component.html',
  styleUrl: './input-custom.component.scss',
  host: {
    class: 'fieldset',
    role: 'fieldset',
  },
})
export class InputCustomComponent {
  readonly #geradorIdUnico = inject(IdGeneratorService);

  inputId = computed(() => this.#geradorIdUnico.gerarId(this.label()));
  public labelSignal = computed(() => this.label());
  label = input<string>('');
  type = input.required<InputType>();
  title = input.required<string>();
  hasError = input<boolean>(false);
  placeholder = input.required<string>();
  errorMessages = input<string[] | null>(null);
  isDisableSignal = computed(() => this.isDisable());
  isDisable = input<boolean>(false);
  isTextarea = input<boolean>(false);
  readonly = input<boolean>(false);
  variant = input<string>('');
  mask = input<string>('');
  showX = input<boolean>(false);
  showMandatory = input<boolean>(false);
  icon = input<boolean>(false);
  fixedSize = input<boolean>(false);
  valueChange = output<string>();

  value = '';
  focus = false;

  constructor(private readonly elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onFocus(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (clickedInside) {
      if (!this.focus) {
        this.focus = true;
      }
    } else {
      this.focus = false;
    }
  }

  onInputChange(event: Event) {
    let inputValue = (event.target as HTMLInputElement)?.value;
    const emojiRegex =
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDFFF]|[\u2600-\u26FF]|[\uD83D-\uDC00-\uDFFF])/g;
    inputValue = inputValue.replaceAll(emojiRegex, '');
    (event.target as HTMLInputElement).value = inputValue;
    this.value = inputValue;
    this.onChange(this.value);
    this.onTouched();
    this.valueChange.emit(this.value);
  }

  onInputBlur() {
    this.focus = false;
  }

  clearInput(event: Event) {
    event.stopPropagation();
    this.value = '';
    this.onChange(this.value);
    this.onTouched();
    this.valueChange.emit(this.value);
  }

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
