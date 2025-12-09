import { Component } from '@angular/core';
import { HeadingComponent } from '@shared/components/heading/heading.component';
import { Icon } from '@core/models/entities/icon';
import { contactIcon, emailIcon, whatsappIcon } from '@core/data/icons';
import { BackToTopComponent } from '@shared/components/back-to-top/back-to-top.component';
import { FormComponent } from '@shared/components/form/form.component';
import { SocialMediaComponent } from '@shared/components/social-media/social-media.component';
import { ButtonSecondaryComponent } from '@shared/components/button-secondary/button-secondary.component';
import { ScrollClassDirective } from '@core/directives/scroll-class.directive';
import { InputCustomComponent } from '@shared/components/input-custom/input-custom.component';
import { PaginatorModule } from 'primeng/paginator';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorMessageHelper } from '@shared/validators/error-message-helper/error-message.helper';
import { ContactForm, EmailParams } from '@shared/intefaces/contact.inteface';
import { SendEmailService } from '@core/services/send-email.service';
import Swal from 'sweetalert2';
import { isValidInput } from '@shared/validators/is-valid-input.validator';
import { ButtonSubmitComponent } from '@shared/components/form/components/button-submit/button-submit.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeadingComponent,
    BackToTopComponent,
    FormComponent,
    SocialMediaComponent,
    ButtonSecondaryComponent,
    ScrollClassDirective,
    InputCustomComponent,
    PaginatorModule,
    ReactiveFormsModule,
    ButtonSubmitComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactIcon: Icon = contactIcon;
  whatsappIcon: Icon = whatsappIcon;
  emailIcon: Icon = emailIcon;

  getErrorMessages(controlName: string): string[] {
    const control = this.contactForm.get(controlName);
    return ErrorMessageHelper.getErrorMessages(control, controlName);
  }

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
      message: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  get isDisabled(): boolean {
    return this.contactForm.invalid || this.isLoading;
  }

  onSubmit(): void {
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
