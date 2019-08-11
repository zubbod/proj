import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  static Snils(control: AbstractControl): ValidationErrors | null {
    if (control.dirty && !(/^\d\d\d\-\d\d\d\-\d\d\d\-\d\d$/.test(control.value))) {
      return { snils: true };
    }
    return null;
  }
}
