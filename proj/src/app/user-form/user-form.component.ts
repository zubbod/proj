import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { User } from './../shared/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public user: User;
  constructor() {

    this.user = {
      firstName: 'Kot',
      lastName: 'Matroskin'
    };

   }

  ngOnInit() {
  }

  public onSubmitButtonHandler() {
    this.user = new User('Имя сохранено', 'Фамилия сохранена');
  }
}
