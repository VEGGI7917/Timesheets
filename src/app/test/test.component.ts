import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  d=new Date();
  day:number;
  i:number=0;
  datearray=[]
  dayarray=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  constructor() { }

  ngOnInit() {
    this.day=this.d.getDay();
    switch (this.day) {
    case 0:
    this.datearray.push(this.d.setDate(this.d.getDate()-6)); 
    console.log(this.d);
    for(this.i;this.i<6;this.i++){
      this.datearray.push(this.d.setDate(this.d.getDate()+1));
      console.log(this.d);
    }
    break;
    case 1:
    this.datearray[0]=this.d.setDate(this.d.getDate());  
    console.log(this.d);
    for(this.i;this.i<6;this.i++){
      this.datearray.push(this.d.setDate(this.d.getDate()+1));
      console.log(this.d);
    } 
    break; 
    case 2:
    this.datearray.push(this.d.setDate(this.d.getDate()-1));  
    for(this.i;this.i<6;this.i++){
      this.datearray[this.i+1]=this.d.setDate(this.d.getDate()+1);
    }  
    break;
    case 3:
    this.datearray.push(this.d.setDate(this.d.getDate()-2));  
    for(this.i;this.i<6;this.i++){
      this.datearray.push(this.d.setDate(this.d.getDate()+1));
    break;
    }  
    case 4:
    this.datearray.push(this.d.setDate(this.d.getDate()-3));  
    for(this.i;this.i<6;this.i++){
      this.datearray.push(this.d.setDate(this.d.getDate()+1));
    } 
    break; 
    case 5:
    this.datearray.push(this.d.setDate(this.d.getDate()-4));  
    for(this.i;this.i<6;this.i++){
      this.datearray.push(this.d.setDate(this.d.getDate()+1));
    }
    break;  
    case 6:
    this.datearray.push(this.d.setDate(this.d.getDate()-5));  
    for(this.i;this.i<6;this.i++){
      this.datearray.push(this.d.setDate(this.d.getDate()+1));
    }  
    break;

  default:
    break;
}

  /*  for(this.i;this.i<7;this.i++){
      if(this.i!=0){
      this.datearray.push(this.d.setDate(this.d.getDate()+1));
    }else {
      this.datearray.push(this.d.setDate(this.d.getDate()));
    }
  }*/
  }
  nextWeek(){
    this.i=0;
    for(this.i;this.i<7;this.i++){     
      this.datearray[this.i]=(this.d.setDate(this.d.getDate()+1));
      console.log(this.d);
    }
  }
  lastWeek(){
    this.i=0;
    for(this.i;this.i<7;this.i++){ 
      if(this.i!=0){   
      this.datearray[this.i]=(this.d.setDate(this.d.getDate()+1));
    }else{
      this.datearray[this.i]=(this.d.setDate(this.d.getDate()-13));
    }
  }
 
  }

}
