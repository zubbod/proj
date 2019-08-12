import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  firstName: string;
  lastName: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
  }
}
