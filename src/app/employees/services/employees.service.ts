// ng g s employees/services/employees
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(  private http: HttpClient ) { }


  // create
  createEmployee( employeeFormData: any ): any{ // 1. get the form data from the comp ts
    console.log(employeeFormData);

    // 2. send the data to the REST API
      // 2.1 What's the REST API Endpoint? https://jsonplaceholder.typicode.com/users
      // 2.2 What's the HTTP Method? POST
      // 2.3 What's the REST API Client Tool? HttpClient
    return this.http.post('https://jsonplaceholder.typicode.com/users', employeeFormData)
      .pipe( map( (res: any) => { // 3. get the res from the REST API
        console.log( res );
        return res; // 4. send the res to the comp
      }));

  }

  // get all employees
  getEmployees( ): Observable<any> { // 1. get the req from the comp ts
    console.log('Inside getEmployees');

    // 2. send the req to the REST API
      // 2.1 What's the REST API Endpoint? https://jsonplaceholder.typicode.com/users
      // 2.2 What's the Http Method? GET
      // 2.3 What's the REST API Client tool? HttpClient
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe( map (( res: any) => { // 3. get the res from the REST API
        // enrich, sort, filter, remove, convert to json
        console.log(res);
        return res as Observable<any>; // 4. send the res to the comp
      }));
  }

  // get employee details
  getEmployeeById( empId: any ): any {
    console.log(empId);

    // REST API URL: https://jsonplaceholder.typicode.com/users/1
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + empId)
      .pipe( map (( res: any) => {
        console.log(res);
        return res;
      }));
  }

  // update employee
  updateEmployee( employeeData: any): any {
    console.log(employeeData);

    const REST_API_URL = 'https://jsonplaceholder.typicode.com/users/' + employeeData.id;

    return this.http.put(REST_API_URL, employeeData)
      .pipe( map (( res: any) => {
        console.log(res);
        return res;
      }));
  }

  // delete employee

}
