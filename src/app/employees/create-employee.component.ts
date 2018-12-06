import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

// ngx-bootstrap
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  // gender = 'male'; // lets the radio button be checked/unchecked
  // isActive = true; // lets the checkbox button be checked/unchecked
  // department = 2; // lets the select list be selected

  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-dark-blue';
  dateType = 'DD-MM-YYYY';

  previewPhoto = false;
  
  // default date
  dateOfBirth: Date = new Date(1981, 4, 31);

  employee: Employee = {
    id: null,
    name: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    gender: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null
  }

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin ' }
  ];

  constructor() {

    // useful for copying properties
    // ngx-bootstrap config properties
    this.bsConfig = Object.assign({}, 
      { 
        containerClass: this.colorTheme, 
        showWeekNumbers: false,
        minDate: new Date(1914, 0 , 1),
        maxDate: new Date(),
        dateInputFormat: this.dateType
        
      });
  }

  ngOnInit() {
  }


  // Saves employees from the form 
  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }

  // method for photo preview from photo path
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto
  }

}
