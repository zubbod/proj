import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective implements OnInit {

  @Input() selectedSize = '1.1rem';
  @Input() defaultSize = '1rem';

  private fontSize: string;
  private fontWeight = 'normal';
  private marginBottom: string;
  private defaultMarginBottom = '0.2rem';

  ngOnInit() {
    this.fontSize = this.defaultSize;
    this.marginBottom = '0.2rem';
  }

  @HostBinding('style.fontSize') get getFontSize() {
    return this.fontSize;
  }

  @HostBinding('style.marginBottom') get getMarginBottom() {
    return this.marginBottom;
  }

  @HostBinding('style.fontWeight') get getFontWeight() {
    return this.fontWeight;
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontWeight = 'bold';
    this.fontSize = this.selectedSize;
    this.marginBottom = `${parseFloat(this.defaultMarginBottom) - (parseFloat(this.defaultSize) - parseFloat(this.selectedSize))}rem`;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.fontWeight = 'normal';
    this.fontSize = this.defaultSize;
    this.marginBottom = this.defaultMarginBottom;
  }

}
