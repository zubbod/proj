import { IFormData } from "./../interfaces/IFormData";

export class FormDataModel implements IFormData {
  name: string;
  email: string;
  index: number;
  street: string;
  city: string;
  country: string;
  date: any;

  constructor() {
    this.name = '';
    this.email = '';
    this.index = null;
    this.street = '';
    this.city = '';
    this.country = '';
    this.date = new Date();
  }
}