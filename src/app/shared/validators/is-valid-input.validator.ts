import { AbstractControl } from '@angular/forms';

export const isValidInput = (
  validatorName: string,
  formControl: AbstractControl | null
) => {
  if (formControl?.errors !== null) {
    return formControl?.errors[validatorName] && formControl.touched;
  }
};
