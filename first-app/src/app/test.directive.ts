import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  @Input() appTest: any;
  constructor(elementRef: ElementRef) {
    console.log(elementRef);
  }

}
