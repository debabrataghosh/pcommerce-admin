import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    BreadcrumbComponent,
    ViewCategoryComponent,
    ViewProductComponent,
    AddEditCategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : '',
        component : CategoryComponent
      },
      {
        path : 'category/addEdit',
        component : AddEditCategoryComponent
      },
      {
      path: 'category/view',
      component : ViewCategoryComponent
      },
      {
        path : 'category/product',
        component : ViewProductComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
