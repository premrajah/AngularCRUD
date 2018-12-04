import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Cat',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'cat@cat.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/cat.jpg'
    },
    {
      id: 2,
      name: 'Dog',
      gender: 'Female',
      contactPreference: 'Email',
      email: 'dog@dog.com',
      phoneNumber: 1236782364,
      dateOfBirth: new Date('05/13/1968'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/dog.jpg'
    },
    {
      id: 3,
      name: 'Bird',
      gender: 'N/A',
      contactPreference: 'Phone',
      phoneNumber: 4546457895,
      dateOfBirth: new Date('05/13/1968'),
      department: 'Finance',
      isActive: true,
      photoPath: 'assets/images/bird.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
