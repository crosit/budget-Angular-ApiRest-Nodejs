import { Component, OnInit } from '@angular/core';
import { DataConfig } from '../dataConfig.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {

  
  incomeData : any = [];
  

  constructor(public json: DataConfig){
    this.json.getDataConfig('http://localhost:3002/data/budget/1').subscribe((res) => {
      
      this.incomeData = res;
      console.log(this.incomeData);
      
    });
    
  }

}
