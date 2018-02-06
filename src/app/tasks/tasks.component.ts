import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  incriment=[0];
  i:number=0;
  tHArray=[];
  taskHours:object={
    task:["task"],
    monHours:[0] ,
    tueHours:[0],
    wedHours:[0],
    thuHours:[0],
    friHours:[0],
    satHours:[0],
    sunHours:[0],

   }
  constructor() { }

  ngOnInit() {
    this.tHArray.push(this.taskHours);
  
  }

  addRow(){
    this.i++;
    this.incriment.push(this.i);
    
  }
  removeRow(){
    if(this.incriment.length!=1){
    this.incriment.pop();
    this.i--;
    }
  }

}
