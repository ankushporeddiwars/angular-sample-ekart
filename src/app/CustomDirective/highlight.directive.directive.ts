import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) {

   }

   @HostListener('mouseenter') OnMouseEnter(){
      this.renderer.addClass(this.element,'highlight-product');
   }

   @HostListener('mouseout') OnMouseOut(){
    this.renderer.addClass(this.element,'highlight-product');
   }
}
