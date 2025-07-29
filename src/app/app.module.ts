import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './container.component/container.component';
import { SearchComponent} from './container.component/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container.component/product-list/product-list.component';
import { ProductComponent } from './container.component/product-list/product/product.component';
import { FilterComponent } from './container.component/product-list/filter/filter.component';
import { ProductDetailComponent } from './container.component/product-detail/product-detail.component';
import { FeaturedBrandComponent } from './container.component/featured-brand/featured-brand.component';
import {SetBackground} from './CustomDirective/SetBackround.directive';
import { HighlightDirectiveDirective } from './CustomDirective/highlight.directive.directive';
import { ApHoverDirective } from './CustomDirective/ap-hover.directive';
import { DisableproductDirective } from './CustomDirective/disableproduct.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandComponent,
    SetBackground,
    HighlightDirectiveDirective,
    ApHoverDirective,
    DisableproductDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
