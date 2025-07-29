import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'featured-brand',
  templateUrl: './featured-brand.component.html',
  styleUrls: ['./featured-brand.component.css']
})
export class FeaturedBrandComponent implements AfterContentInit {

@ContentChild("Test") titleElement :ElementRef;


ngAfterContentInit() :void
{
  console.log("ngAfterContentInit called.");
 console.log(this.titleElement);
}

}
