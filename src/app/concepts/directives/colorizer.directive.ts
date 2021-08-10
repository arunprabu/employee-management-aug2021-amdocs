import { Directive, ElementRef, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { // Dependency Injection
    console.log('Inside Constructor');
    console.log(this.elRef.nativeElement);

    const el = this.elRef.nativeElement;

    // using js
    // el.style.backgroundColor = 'red';
    // el.style.height = '300px';

    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'height', '300px');
    this.renderer.setStyle(el, 'color', '#fff');
  }

  // Learn about @HostListener()
  // Learn about @HostBinding()

}
