import { Directive, Input, ElementRef, OnInit, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective implements OnInit {

  private bg = 'red';

  constructor( private elRef: ElementRef, private r: Renderer2 ) {
    r.setStyle(elRef.nativeElement, 'color', 'white');
  }

  ngOnInit() {
  }

  @HostBinding('style.backgroundColor') get getColor() {
    return this.bg;
  }

  @HostListener('mouseenter') onmouseenter() {
    this.bg = 'green';
    console.log(this.elRef.nativeElement);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.bg = 'red';
  }
}
