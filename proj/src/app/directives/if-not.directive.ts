import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {

  @Input('appIfNot') set ifNot(condition: boolean) {
    if (!condition) {
      // show
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // hide
      this.viewContainerRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) { }

}
