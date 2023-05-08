import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgSelect2Module } from "ng-select2";

import { AppComponent } from './app/app.component';
import { BlockctaComponent } from './blockcta/blockcta.component';
import { BlogsidebarComponent } from './blogsidebar/blogsidebar.component';
import { BluectaComponent } from './bluecta/bluecta.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FooterComponent } from './footer/footer.component';
import { FootertwoComponent } from './footertwo/footertwo.component';
import { FormboxComponent } from './formbox/formbox.component';
import { HeaderComponent } from './header/header.component';
import { HeadertwoComponent } from './headertwo/headertwo.component';
import { HeaderthreeComponent } from './headerthree/headerthree.component';
import { HeaderfourComponent } from './headerfour/headerfour.component';
import { HeaderfiveComponent } from './headerfive/headerfive.component';
import { ListingsidebarComponent } from './listingsidebar/listingsidebar.component';
import { MenuComponent } from './menu/menu.component';
import { MobilemenuComponent } from './mobilemenu/mobilemenu.component';
import { ShopsidebarComponent } from './shopsidebar/shopsidebar.component';
import { UserbreadcrumbComponent } from './userbreadcrumb/userbreadcrumb.component';
import { RelatedpostComponent } from './relatedpost/relatedpost.component';
import { SimilarlistingComponent } from './similarlisting/similarlisting.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [AppComponent, BlockctaComponent, BlogsidebarComponent, BluectaComponent, BreadcrumbComponent, CalculatorComponent, FooterComponent, FootertwoComponent, FormboxComponent, HeaderComponent, HeadertwoComponent, HeaderthreeComponent, HeaderfourComponent, HeaderfiveComponent, ListingsidebarComponent, MenuComponent, MobilemenuComponent, ShopsidebarComponent, UserbreadcrumbComponent, RelatedpostComponent, SimilarlistingComponent],
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule,
    NgbModule,
    BreadcrumbModule,
    NgSelect2Module,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [AppComponent, BlockctaComponent, BlogsidebarComponent, BluectaComponent, BreadcrumbComponent, CalculatorComponent, FooterComponent, FootertwoComponent, FormboxComponent, HeaderComponent, HeadertwoComponent, HeaderthreeComponent, HeaderfourComponent, HeaderfiveComponent, ListingsidebarComponent, ShopsidebarComponent, UserbreadcrumbComponent,RelatedpostComponent,SimilarlistingComponent]
})
export class SharedModule { }
