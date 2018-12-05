import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  // gender = 'male'; // lets the radio button be checked/unchecked
  // isActive = true; // lets the checkbox button be checked/unchecked
  // department = 2; // lets the select list be selected

  departments: Department[] = [
    { id: 1, name: 'Help Desk'},
    { id: 2, name: 'HR'},
    { id: 3, name: 'IT'},
    { id: 4, name: 'Payroll'},
    { id: 5, name: 'Admin '}
  ];

  constructor() { }

  ngOnInit() {
  }


  // Saves employees from the form 
  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }

}
