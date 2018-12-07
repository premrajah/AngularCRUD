import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';


@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  employeeToDisplay: Employee;  
  private arrayIndex = 1;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees =  this._employeeService.getEmployees();
    this.employeeToDisplay = this.employees[0]; // shows first employee
  }

  /// on button click display next employee
  nextEmployee(): void {

    if(this.arrayIndex <= 2) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }

}
