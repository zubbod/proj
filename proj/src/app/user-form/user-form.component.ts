import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseFormDto } from '../shared/models/course-form-dto';
import { ICoursesFormDto } from '../shared/interfaces/icourses-form-dto';
import { CustomValidators } from '../shared/validators/custom-validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private _fb: FormBuilder) {
   }

  ngOnInit() {
    const form: ICoursesFormDto = {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      city: 'Sevastopol',
      email: 'ex@mail.ru',
      gender: 1,
      id: 100001,
      isApproveDataProcessing: false,
    }
    this.form = this._fb.group(new CourseFormDto(form));
    this.form.controls.firstName.setValidators([
      Validators.required 
    ]);
    this.form.controls.lastName.setValidators([
      Validators.required 
    ]);
    this.form.get('email').setValidators([
      Validators.required, Validators.email, CustomValidators.bannedEmail
    ]);
    this.form.get('email').setAsyncValidators([CustomValidators.asyncEmail]);
    this.form.controls.city.setValidators([
      Validators.required 
    ]);
    this.form.controls.isApproveDataProcessing.setValidators([
      Validators.requiredTrue 
    ]);
  }

  public submit() {
    const formData = {...this.form.value};
    console.log(formData);
  }

}
