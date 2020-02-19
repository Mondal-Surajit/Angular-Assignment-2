import { Component } from '@angular/core';
 
  

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent   {
     parentmsg="Amazon";

      item:string;
      qty:number;
      clicked:boolean;
     receivemsg(obj) 
     {
       
       this.item =obj.value1;
       this.qty=obj.value2;
       this.clicked=obj.value3;
     }
}
