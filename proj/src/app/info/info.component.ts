import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormDataModel } from './../shared/models/formDataModel';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {

  infoForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    address: this.fb.group({
      index: ['', [Validators.required, Validators.pattern(/^[0-9]{5,6}$/)]],
      street: [''],
      city: [''],
      country: ['']
    })
  });

  public unsubscribe: Subject<any> = new Subject<any>();
  private data: FormDataModel = new FormDataModel();

  constructor( private fb: FormBuilder) { }

  ngOnInit() {

    this.infoForm.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(val => {
        this.data.name = val.name;
        this.data.email = val.email;
        this.data.index = val.address.index;
        this.data.street = val.address.street || '';
        this.data.city = val.address.city || '';
        this.data.country = val.address.country || 'Russia';
        this.data.date = new Date().toLocaleDateString();
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
    if (this.infoForm.status === 'INVALID' || event.key === 'return') {
      event.preventDefault();
    }
    console.log(JSON.stringify(this.data));
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
    return this.address.controls.city;
  }
  get street() {
    return this.address.controls.street;
  }
}
