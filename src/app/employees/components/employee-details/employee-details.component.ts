import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  employeeData: any;
  duplicateEmployeeData: any;

  isUpdated = false;

  constructor(private employeesService: EmployeesService, private route: ActivatedRoute) { // 1. connect with the service
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    // 2. send the req to the service
    // 3. get the res from the service
    console.log('Inside ngOnInit');
    // Read URL Param
    const id: any = this.route.snapshot.paramMap.get('id') || null;
    console.log(id);

    this.employeesService.getEmployeeById(id)
      .subscribe((res: any) => {
        console.log(res);
        this.employeeData = res;
      });
  }

  handleEditModalOpen(): void {
    this.duplicateEmployeeData = { ...this.employeeData };
  }

  handleUpdateEmployee(): void {
    console.log(this.duplicateEmployeeData);

    this.employeesService.updateEmployee(this.duplicateEmployeeData)
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.id) {
          this.isUpdated = true;
        }
      });
  }

}
