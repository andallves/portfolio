import { FormControl } from '@angular/forms';

export interface ContactForm {
  fullname: FormControl<string | null>;
  email: FormControl<string | null>;
  message: FormControl<string | null>;
}

export interface EmailParams {
  title: string;
  recipient: string;
  user: string;
  data: string;
  message: string;
  email: string;
}
