import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'

interface product{
  name:string;
  quantity:number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
name:string;
quantity:number;
products:product[]=[{"name":"Moto G5","quantity":2},{"name":"Racold Geyser","quantity":3}];
n;
q;
   
@Input() message: string ;  

//isDisabled=false;
hiddenProperty=true;


 onAddRow() {
   this.products.push({name:this.name,quantity:this.quantity});
   this.n= this.name;
   this.q=this.quantity;
   //this.name=this.name.concat("1");

   this.hiddenProperty=false;
 
}



}