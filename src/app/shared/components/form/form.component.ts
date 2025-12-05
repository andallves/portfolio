import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactForm, EmailParams } from '@shared/intefaces/contact.inteface';
import { PhoneFormatDirective } from '@core/directives/phone-format.directive';
import { SendEmailService } from '@core/services/send-email.service';
import Swal from 'sweetalert2';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { isValidInput } from '@shared/validators/is-valid-input.validator';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, PhoneFormatDirective, LoadingComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  contactForm: FormGroup<ContactForm>;
  protected isLoading: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly sendEmailService: SendEmailService
  ) {
    this.contactForm = this.formBuilder.group({
      fullname: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      cellphone: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/),
      ]),
      message: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  get isDisabled(): boolean {
    return this.contactForm.invalid || this.isLoading;
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    this.isLoading = true;

    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      this.isLoading = false;
      return;
    }
    const { fullname, email, message, cellphone } = this.contactForm.value as {
      fullname: string;
      email: string;
      message: string;
      cellphone: string;
    };

    const emailInfo: EmailParams = {
      title: 'Nova Mensagem!',
      recipient: 'Rickson',
      user: fullname,
      data: new Date().toLocaleDateString('pt-BR'),
      message,
      cellphone,
      email,
    };

    this.sendEmail(emailInfo);
  }

  private async sendEmail(emailInfo: EmailParams) {
    try {
      await this.sendEmailService.sendEmail(emailInfo);

      await Swal.fire({
        title: 'Mensagem enviada!',
        icon: 'success',
      });

      this.contactForm.reset();
    } catch {
      await Swal.fire({
        title: 'Erro ao enviar mensagem',
        text: 'Não foi possível enviar. Tente me chamar no LinkedIn!',
        icon: 'error',
      });
    } finally {
      this.isLoading = false;
    }
  }

  hasValue(fieldName: string) {
    return this.contactForm.get(fieldName)?.value !== '';
  }

  isValid(inputName: string, validatorName: string) {
    const formControl: AbstractControl | null = this.contactForm.get(inputName);
    return isValidInput(validatorName, formControl);
  }
}
