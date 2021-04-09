import { Component, OnInit } from '@angular/core';
import { DataConfig } from '../dataConfig.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  data : any = [];
  suma : number = 0;
  

  constructor(public json: DataConfig){
    this.json.getDataConfig('http://localhost:3002/data/budget').subscribe((res) => {
      
      this.data = res;
      console.log(this.data);
      for(let i of this.data){
        if(i.validation == 1){
          this.suma += i.cost;
        }else{
          this.suma -= i.cost;
        }
      }
      
    });
    
  }

}
