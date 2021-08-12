import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { RouterModule, Routes } from '@angular/router';

const employeesRoutes: Routes = [
  {
    path: 'employees', children: [
      { path: '', component: EmployeesComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: ':id', component: EmployeeDetailsComponent } // id -- url param
    ]
  }
];

// Feature Routing Module
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(employeesRoutes) // registering the child routes
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesRoutingModule { }
