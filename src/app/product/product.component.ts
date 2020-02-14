import { Component, Input , Output, EventEmitter } from '@angular/core';

interface Products {
  
  name:string;
  quantity:number;
}


@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
     
  @Input() childmsg: string;
  @Output() msgEvent = new EventEmitter<any>();
   
  value3: boolean=true;
  prods:string;
    qty:number;

    iproducts : Products[] = [{
     
    name:"Moto G5",
    quantity:2
  },
  { 
    name:"Racold Geyser",
    quantity:3
  }];
  
  AddItem(value1:string,value2:number,value3:boolean) {
    this.iproducts.push({name:this.prods,quantity:this.qty})
   
    this.msgEvent.emit({value1,value2,value3})


  }
  
}