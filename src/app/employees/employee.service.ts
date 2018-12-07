import { Injectable } from "@angular/core";

import { Employee } from "../models/employee.model";

// for injectable dependences 
@Injectable()
export class EmployeeService {

  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Cat',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'cat@cat.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/cat.jpg',
      password: 'abc',
      confirmPassword: 'abc'
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
      photoPath: 'assets/images/dog.jpg',
      password: 'xyz',
      confirmPassword: 'xyz'
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
      photoPath: 'assets/images/bird.jpg',
      password: 'wsd',
      confirmPassword: 'wsd'
    }
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }
}