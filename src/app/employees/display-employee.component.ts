import { Component, OnInit, Input } from '@angular/core';


import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  // backing field for Input property
  private _employee: Employee;
  private _employeeId: number;

  

  @Input() 
  set employeeId(val : number) {
    this._employeeId = val;
  }
  get employeeId() {
    return this._employeeId;
  }

  @Input()
  set employee(val: Employee) {
    
    console.log('employeeID changed from ' + JSON.stringify(this._employee) + ' to ' + JSON.stringify(val));
    this._employee = val;
  }
  get employee(): Employee {
    return this._employee;
  }

  constructor() { }

  ngOnInit() {
  }

  


}
