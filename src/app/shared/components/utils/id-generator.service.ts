import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdGeneratorService {
  public gerarId(label: string): string {
    if (!label) return 'input-id';

    return (
      label
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replaceAll(/[\u0300-\u036f]/g, '')
        .replaceAll(/[^a-z0-9\s-]/g, '')
        .replaceAll(/\s+/g, '')
        .replaceAll(/-+/g, '') + '-input-id'
    );
  }
}
