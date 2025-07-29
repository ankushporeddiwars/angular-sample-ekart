import { Directive, ElementRef,OnInit,Renderer2,Input } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackground implements OnInit{
//private element : ElementRef;
//private renderer :Renderer2  no need to write exernally when we provide access modifier
    // in constructor it automatically create same thing internally.

// @Input('setBackground') backColor : string ='#36454F';
// @Input() textColor : string = 'white';

@Input('setBackground') changeTextandBackColor :{textColor:string, backColor:string};

//Dependecy injected here and i have assigned it to private property.
// if we declared as private in constructor then implicitly it will create private property.
    constructor(private element:ElementRef, private renderer : Renderer2){
        //this.element=element;
        //this.renderer = renderer;
    }

    ngOnInit(){
        //this.element.nativeElement.style.backgroundColor = '#36454F';
        //this.element.nativeElement.style.color ='white';
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.changeTextandBackColor.backColor);
        this.renderer.setStyle(this.element.nativeElement,'color',this.changeTextandBackColor.textColor);
         //this.element.nativeElement.style.backgroundColor='yellow';
    }
}