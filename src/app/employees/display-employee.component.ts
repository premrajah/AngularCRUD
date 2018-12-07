import { Component, OnInit, Input, OnChanges } from '@angular/core';


import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  // backing field for Input property
  private _employee: Employee;

  @Input()
  set employee(val: Employee) {
    console.log(this._employee);
    console.log('Previous: ' + (this._employee ? this._employee.name : 'NULL'));
    console.log('Current: ' + val.name)
    this._employee = val;
  }
  get employee(): Employee {
    return this._employee;
  }

  constructor() { }

  ngOnInit() {
  }


}
