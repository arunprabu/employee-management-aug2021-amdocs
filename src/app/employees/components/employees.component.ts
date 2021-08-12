import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit, OnDestroy {

  employeeList: any;
  employeeListSubscription: Subscription;

  constructor( private employeesService: EmployeesService) { // 1. connect with the service
    console.log('Inside Constructor');
    this.employeeListSubscription = new Subscription();
  }

  // Life cycle Hook
  ngOnInit(): void {
    console.log('Inside ngOnInit');

    // whenever the comp is coming into view, ngOnInit will be called
    // ideal life cycle for us to send ajax req

    // 2. send the req to the service
    this.employeeListSubscription =  this.employeesService.getEmployees()
      .subscribe( (res: Employee[]) => { // 3. get the res from the service
        console.log(res);
        this.employeeList = res;
      });
  }

  ngOnDestroy(): void{ // lifecycle hook
    // when the comp goes out of the view... this will be called.
    // ideal place for you to clear the data, unsubscribe, remove intervals, remove timeouts

    console.log('Inside ngOnDestroy');
    this.employeeListSubscription.unsubscribe();

    // clear the data
    if (this.employeeList && this.employeeList.length > 0){
      this.employeeList.length = 0;
    }
  }


}
