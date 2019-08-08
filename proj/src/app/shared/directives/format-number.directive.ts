import { Directive, Input, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appFormatNumber]'
})
export class FormatNumberDirective implements OnInit {

  private formatted: string;
  private regs = { space: /\s/g, comma: /\,/g };
  private formatOptions = { maximumFractionDigits: 2, style: 'currency', currency: 'RUB' };

  @Input() control: FormControl;

  @HostListener('input') onInput() {
      this.prepareValue();
    }

  @HostListener('change') onchange() {
    this.setValue();
  }

  constructor() { }

  ngOnInit() {
    this.prepareValue();
    this.setValue();
  }

  private setValue() {
    this.control.setValue(this.formatted);
  }

  private prepareValue() {
    const val = this.control.value || '0';
    const formattingVal = parseFloat(val.replace(this.regs.comma, '.').replace(this.regs.space, ''));
    if (isNaN(formattingVal)) {
      return this.formatted = new Intl.NumberFormat('ru-RU', this.formatOptions).format(0.00);
    }
    this.formatted = new Intl.NumberFormat('ru-RU', this.formatOptions).format(formattingVal);
  }
}
