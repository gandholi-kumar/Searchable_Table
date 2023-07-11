import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeURL = 'https://dummy.restapiexample.com/api/v1/employees';
  constructor() {}

  getEmployee = async (): Promise<any> => {
    try {
      const res = await axios.get(this.employeeURL);
      return res;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
