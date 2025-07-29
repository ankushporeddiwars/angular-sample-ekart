import { Directive, ElementRef, Renderer2 ,Input} from '@angular/core';

@Directive({
  selector: '[disableproduct]'
})
export class DisableproductDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { 

  }

  @Input() set disableproduct(disable:Boolean){
    if(disable)
    {
     this.renderer.addClass(this.element.nativeElement,'disable-out-of-stock-product');
    }
  }

}
