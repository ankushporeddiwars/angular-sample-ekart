import { Component, ElementRef, EventEmitter, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchText:string=''; 

@Output()
searchTextChanged : EventEmitter<string> = new EventEmitter<string>

@ViewChild('searchTextInput') searchTextInputEl : ElementRef;

searchItem()
{
this.searchText= this.searchTextInputEl.nativeElement.value;
this.searchTextChanged.emit(this.searchText);
}
}
