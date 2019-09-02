import { Directive, Input, ElementRef, OnInit, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective implements OnInit {

  private bg = 'red';

  constructor( private el: ElementRef, private r: Renderer2 ) {
    r.setStyle(el.nativeElement, 'color', 'white')
    console.log(el);
  }

  ngOnInit() {
  }

  // @HostBinding('style.backgroundColor') get getColor() {
  //   return this.bg;
  // }

  // @HostListener('mouseenter') onmouseenter() {
  //   this.bg = 'green';
  //   console.log(this.elRef.nativeElement);
  // }

  // @HostListener('mouseleave') onmouseleave() {
  //   this.bg = 'red';
  // }
}
