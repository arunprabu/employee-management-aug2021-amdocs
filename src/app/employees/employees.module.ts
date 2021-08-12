import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeesComponent } from './components/employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Feature's Main Switching Box
@NgModule({
  declarations: [
    EmployeesComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // reactive forms
    FormsModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
