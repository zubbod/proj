import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  firstName: string;
  lastName: string;

  constructor(firstName = '', lastName = '') {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
