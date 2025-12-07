import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactForm, EmailParams } from '@shared/intefaces/contact.inteface';
import { SendEmailService } from '@core/services/send-email.service';
import Swal from 'sweetalert2';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { isValidInput } from '@shared/validators/is-valid-input.validator';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, LoadingComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  contactForm: FormGroup<ContactForm>;
  protected isLoading: boolean = true;

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
    const { fullname, email, message } = this.contactForm.value as {
      fullname: string;
      email: string;
      message: string;
    };

    const emailInfo: EmailParams = {
      title: 'Nova Mensagem!',
      recipient: 'Dev - Andre Alves',
      user: fullname,
      data: new Date().toLocaleDateString('pt-BR'),
      message,
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
