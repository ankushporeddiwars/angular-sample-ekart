import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  listofarray:string[]=["Monday","Tuesday","Wed","Thusrday"];
  searchTextValue: string = '';

 @ViewChild(ProductListComponent) productListComponent : ProductListComponent
  SetSearchText(value : string)
  {  
    this.searchTextValue = value;
    this.productListComponent.onFilterChanged('abc');
  }
constructor(){
  console.log("Constructor Called.");
}

}
