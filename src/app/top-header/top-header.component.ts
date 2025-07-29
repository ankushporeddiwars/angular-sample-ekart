import { Component } from '@angular/core';
// when we add component [top-header] into sqr boxes then it will work as html tagg.
// when we add component top-header like it then it will work as selector.
// when we add component .top-header ike it then it will work as class.
// when we add component #top-header ike it then it will work as id.
@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {

}
