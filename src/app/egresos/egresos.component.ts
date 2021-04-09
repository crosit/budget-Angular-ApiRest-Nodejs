import { Component, OnInit } from '@angular/core';
import { DataConfig } from '../dataConfig.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent {

  expensesData : any = [];
  

  constructor(public json: DataConfig){
    this.json.getDataConfig('http://localhost:3002/data/budget/2').subscribe((res) => {
      
      this.expensesData = res;
      console.log(this.expensesData);
      
    });
    
  }

}
