import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { forbiddenNameValidator } from '../shared/directives/forbidden-name.directive';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  // infoForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   address: new FormGroup({
  //     index: new FormControl(''),
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     country: new FormControl('')
  //   })
  // });

  infoForm = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    address: this._fb.group({
      index: [''],
      street: [''],
      city: [''],
      country: ['']
    }),
    // aliases: this._fb.array([
    //   this._fb.control('')
    // ])
  });

  constructor( private _fb: FormBuilder) { }

  ngOnInit() {
  }

  public updateValue() {
    this.infoForm.patchValue({
      name: 'Crocodillo',
      email: 'example@rt.com',
      address: {
        index: '29092',
        street: 'Lizy Chaikinoi',
        city: 'Sevastopol',
        country: 'Russia'
      }
    });
  }

  public addAlias() {
    this.aliases.push(this._fb.control(''));
  }

  public onSubmit() {
    console.warn(this.infoForm.value)
  }

  get aliases() {
    return this.infoForm.get('aliases') as FormArray;
  }
  get name() {
    return this.infoForm.get('name');
  }
  get email() {
    return this.infoForm.get('email');
  }
}
