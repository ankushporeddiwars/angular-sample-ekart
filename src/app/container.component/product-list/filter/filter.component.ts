import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number=0;

  @Input()
  inStock:number=0;
  
  @Input()
  outOfStock:number=0;

  @Output()
  selectedRadioButtoonChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedRadioButton : string="all";

  onSelectedRadioButtoonChanged(){
  this.selectedRadioButtoonChanged.emit(this.selectedRadioButton);
  }
  ngOnChanges(changes : SimpleChanges)
{
  console.log("ngChanges Hooked Called");
  //console.log(this.message);
  //console.log(changes);
}

}
