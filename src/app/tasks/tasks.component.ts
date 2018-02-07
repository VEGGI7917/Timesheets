import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  incriment=[0];
  i:number=0;
  constructor() { }

  ngOnInit() {
  
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
