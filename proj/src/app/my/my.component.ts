import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  public form: FormGroup = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sum: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log(this.form);
    this.setValidators(this.form);
  }

  private setValidators(form: FormGroup) {
    form.controls.sum.setValidators([Validators.required]);
  }

  get sum() {
    return this.form.get('sum');
  }
}
