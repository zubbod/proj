import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { forbiddenNameValidator } from '../shared/directives/forbidden-name.directive';
import { takeUntil, take } from "rxjs/operators";
import { Subject } from 'rxjs';
import { IFormData } from "../shared/interfaces/IFormData";

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
    }),
    // aliases: this._fb.array([
    //   this._fb.control('')
    // ])
  });

  public unsubscribe: Subject<any> = new Subject<any>();
  private _data: FormData = null;

  constructor( private _fb: FormBuilder) { }

  ngOnInit() {

    this.infoForm.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(val => {
        console.log(val.name);
      })
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

  public addAlias() {
    this.aliases.push(this._fb.control(''));
  }

  public onSubmit() {
    console.dir(this.infoForm.value);
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
    return this.address.controls['index'];
  }
}
