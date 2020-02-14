import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent} from './product/product.component';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent,ProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }