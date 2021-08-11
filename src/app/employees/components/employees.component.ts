import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit {

  employeeList: any;

  constructor( private employeesService: EmployeesService) { // 1. connect with the service
    console.log('Inside Constructor');
  }

  // Life cycle Hook
  ngOnInit(): void {
    console.log('Inside ngOnInit');

    // whenever the comp is coming into view, ngOnInit will be called
    // ideal life cycle for us to send ajax req

    // 2. send the req to the service
    this.employeesService.getEmployees()
      .subscribe( (res: any) => { // 3. get the res from the service
        console.log(res);
        this.employeeList = res;
      });
  }

}
