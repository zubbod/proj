import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  private opacity = .15;

  constructor(private elRef: ElementRef, private r: Renderer2) { 
    this.setStyle();
  }

  @HostListener('mouseenter') onmouseenter() {
    this.opacity = 0;
    this.setStyle();
  }

  @HostListener('mouseleave') onmouseleave() {
    this.opacity = .15;
    this.setStyle();
  }

  private setStyle(): void {
    this.r.setStyle(this.elRef.nativeElement, 'opacity', this.opacity);
  }

}
