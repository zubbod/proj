import { AbstractControl } from '@angular/forms';
import { isNull } from 'util';

export function Snils(control: AbstractControl) {
  if (control.dirty && !(/^\d\d\d\-\d\d\d\-\d\d\d\-\d\d$/.test(control.value))) {
    return { snils: true };
  }
  return null;
}
