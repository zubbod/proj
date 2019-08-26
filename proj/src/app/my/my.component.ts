import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './../shared/validators/custom-validators';
import { Subject, Subscription } from 'rxjs';
// import {  } from 'rxjs/operators';
@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  private sub: Subscription;
  public form: FormGroup = null;
  public count = 0;
  public inputValue = '';

  // select
  public visible = false;
  public options: string[] = [];
  public selectValue = 'Выберите из списка';

  public stream$: Subject<number> = new Subject<number>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sum: [null, [Validators.required]],
      snils: [null, [Validators.required, CustomValidators.Snils]]
    });

    this.sub = this.stream$.subscribe(res => console.log('Subscription ', res));

  }

  ngOnInit() {
    this.setValidators(this.form);
    this.options = ['option 1', 'option 2', 'option 3'];
  }

  private setValidators(form: FormGroup) {
    form.controls.sum.setValidators([Validators.required]);
  }

  public stopCounter() {
    this.sub.unsubscribe();
  }

  public next() {
    this.count++;
    this.stream$.next(this.count);
  }

  get sum() {
    return this.form.get('sum');
  }
  get snils() {
    return this.form.get('snils');
  }

  /** ************************************************************************* */

  onInput(e: Event) {
    this.inputValue = (e.target as HTMLInputElement).value;
  }

  onKyeUp(val: string) {
    this.inputValue = val;
  }

  /** **********select********** */

  onSelectChange(e?: Event) {
    console.log(e);
  }
}
