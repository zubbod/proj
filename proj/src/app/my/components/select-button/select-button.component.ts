import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {

  public options: any = {};
  // public checked: boolean = false;

  constructor() { }

  ngOnInit() {
    this.options = [
      {text: 'Мужской', checked: true},
      {text: 'Женский', checked: false}
    ];
  }

  public onChangeHandler(e) {
    console.log(e.target.checked);
    
  }
}
