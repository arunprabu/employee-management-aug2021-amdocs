import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor( private http: HttpClient ) { }


  createEmployee( employeeFormData: any ): any{ // 1. get the form data from the comp.ts
    console.log(employeeFormData);

    // 2. send the form data to the REST API
      // 2.1 What's the REST API Endpoint? https://jsonplaceholder.typicode.com/users
      // 2.2 Http Method? POST
      // 2.3 What's the REST API Client tool? HttpClient

    return this.http.post('https://jsonplaceholder.typicode.com/users', employeeFormData)
      .pipe(map( (res: any) => { // 3. get the res from the REST API
        console.log(res);
        return res; // 4. send the res to the comp.ts
      }));
  }

}
