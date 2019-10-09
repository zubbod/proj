import { AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {

  static Snils(control: AbstractControl): ValidationErrors | null {
    if (control.dirty && !(/^\d\d\d\-\d\d\d\-\d\d\d\-\d\d$/.test(control.value))) {
      return { snils: true };
    }
    return null;
  }

  static bannedEmail(control: FormControl): ValidationErrors | null {
    if (/@mail.ru/.test(control.value)) {
      return { bannedMail: true };
    }
    return null;
  }

  static asyncEmail(control: FormControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@email.com') {
          resolve({asyncEmail: true});
        } else {
          resolve(null);
        }
        }, 2500)
    });
  }
}
