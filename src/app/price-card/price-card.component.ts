/*import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {
  @Input() price="";
  @Input() id="0"
  @Input() features:any=[]
  @Input() name:any
  constructor() { 
   
  }

  ngOnInit(): void {
  }
  doAction(id:string){
    alert(id)
  }
}*/
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {
  @Input() id="0"
  @Input() price:string="";
  @Input() name:string="";
  @Input() features:any=[];
  @Input() features_muted:any=[];

  constructor() { }

  ngOnInit(): void {
  }
  doAction(name:string){
    alert(`${name.toUpperCase()} Membership Selected`)
  }
}
