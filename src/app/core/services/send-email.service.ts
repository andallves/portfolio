import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from 'src/environments/environment';
import { EmailParams } from '@shared/intefaces/contact.inteface';

@Injectable({
  providedIn: 'root',
})
export class SendEmailService {
  private readonly serviceID = environment.emailServiceID;
  private readonly templateID = environment.emailTemplateID;
  private readonly publicKey = environment.emailPublicKey;

  constructor() {
    emailjs.init(this.publicKey);
  }

  sendEmail(form: EmailParams): Promise<EmailJSResponseStatus> {
    const templateParams = {
      title: form.title,
      recipient: form.recipient,
      user: form.user,
      data: form.data,
      message: form.message,
      email: form.email,
    };

    return emailjs.send(this.serviceID, this.templateID, templateParams);
  }
}
