import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  private opacity = 0.77;

  constructor(private elRef: ElementRef, private r: Renderer2) { }

  @HostListener('mouseenter') onmouseenter() {
    this.opacity = 0;
    this.setStyle();
  }

  @HostListener('mouseleave') onmouseleave() {
    this.opacity = null;
    this.setStyle();
  }

  private setStyle(): void {
    this.r.setStyle(this.elRef.nativeElement, 'opacity', this.opacity);
  }

}
