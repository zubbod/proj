import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { forbiddenNameValidator } from '../shared/directives/forbidden-name.directive';
import { takeUntil, take } from "rxjs/operators";
import { Subject } from 'rxjs';
import { FormDataModel } from "./../shared/models/formDataModel";
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {

  infoForm = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    address: this._fb.group({
      index: ['', [Validators.required, Validators.pattern(/^[0-9]{5,6}$/)]],
      street: [''],
      city: [''],
      country: ['']
    })
  });

  public unsubscribe: Subject<any> = new Subject<any>();
  private _data: FormDataModel = new FormDataModel();

  constructor( private _fb: FormBuilder) { }

  ngOnInit() {

    this.infoForm.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(val => {
        this._data.name = val.name;
        this._data.email = val.email;
        this._data.index = val.address.index;
        this._data.street = val.address.street || '';
        this._data.city = val.address.city || '';
        this._data.country = val.address.country || 'Russia';
        this._data.date = new Date().toLocaleDateString();
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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

  public onSubmit(event) {
    if(this.infoForm.status === 'INVALID' || event.key === 'return') {
      event.preventDefault();
    }
    console.log(JSON.stringify(this._data));
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
  get address() {
    return this.infoForm.get('address') as FormGroup;
  }
  get index() {
    return this.address.get('index');
  }
  get city() {
    return this.address.controls['city'];
  }
  get street() {
    return this.address.controls['street'];
  }
}
