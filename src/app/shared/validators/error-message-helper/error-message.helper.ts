import { AbstractControl, ValidationErrors } from '@angular/forms';

type MinMaxError = { requiredLength?: number };

export class ErrorMessageHelper {
  private static readonly defaultLabels: Record<string, string> = {
    fullname: 'Nome',
    email: 'Email',
    message: 'Mensagem',
  };

  // m = masculino, f = feminino
  private static readonly defaultGenders: Record<string, 'm' | 'f'> = {
    fullname: 'm',
    email: 'm',
    message: 'f',
  };

  static getErrorMessages(
    control: AbstractControl | null,
    fieldKey: string,
    labels?: Record<string, string>,
    genders?: Record<string, 'm' | 'f'>
  ): string[] {
    if (!control?.errors || !control.touched) return [];

    const mergedLabels = { ...ErrorMessageHelper.defaultLabels, ...labels };
    const mergedGenders = { ...ErrorMessageHelper.defaultGenders, ...genders };
    const fieldName = mergedLabels[fieldKey] ?? fieldKey;

    // determine gender: explicit mapping first, otherwise a simple heuristic
    const gender: 'm' | 'f' =
      mergedGenders[fieldKey] ??
      ErrorMessageHelper.inferGenderFromWord(fieldName);

    const definiteArticle = gender === 'f' ? 'A' : 'O'; // 'O' ou 'A'
    const indefiniteArticle = gender === 'f' ? 'uma' : 'um'; // 'um' ou 'uma'

    const errors: string[] = [];

    for (const errorKey of Object.keys(control.errors)) {
      const error = control.errors[errorKey] as ValidationErrors | undefined;
      switch (errorKey) {
        case 'required':
          errors.push(
            `${definiteArticle} <strong>'${fieldName}'</strong> é obrigatório.`
          );
          break;
        case 'minlength': {
          const minErr = error as MinMaxError | undefined;
          const minLen = minErr?.requiredLength ?? 'N';
          errors.push(
            `${definiteArticle} <strong>'${fieldName}'</strong> deve ter no mínimo ` +
              `${minLen} caracteres.`
          );
          break;
        }
        case 'maxlength': {
          const maxErr = error as MinMaxError | undefined;
          const maxLen = maxErr?.requiredLength ?? 'N';
          errors.push(
            `${definiteArticle} <strong>'${fieldName}'</strong> deve ter no máximo ` +
              `${maxLen} caracteres.`
          );
          break;
        }
        case 'email':
          errors.push(
            `Informe ${indefiniteArticle} <strong>'${fieldName}'</strong> válido.`
          );
          break;
        case 'pattern':
          errors.push(
            `${definiteArticle} <strong>'${fieldName}'</strong> está num formato inválido.`
          );
          break;
        default:
          errors.push(
            `${definiteArticle} <strong>'${fieldName}'</strong> inválido.`
          );
      }
    }
    return errors;
  }

  // heurística simples: se a palavra terminar com 'a' -> feminino, senão masculino
  private static inferGenderFromWord(word: string): 'm' | 'f' {
    if (!word) return 'm';
    const lastChar = word.trim().slice(-1).toLowerCase();
    if (lastChar === 'a' || lastChar === 'ã' || lastChar === 'ó') return 'f';
    return 'm';
  }
}
