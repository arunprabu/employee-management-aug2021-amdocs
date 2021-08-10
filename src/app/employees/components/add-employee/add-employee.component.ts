import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  isSaved = false;

  // Step 1:
  // Let's have form tag equivalent in TS
  addContactForm = new FormGroup({
    // Step 2: Let's have form element equivalents
    name: new FormControl('arun', Validators.required), // Step 5: Working on validations
    phone: new FormControl('34234', Validators.required),
    email: new FormControl('a@b.com', [Validators.required, Validators.email])
  });
  

  constructor( private employeesService: EmployeesService ) { // 1. connect with the service using Dep inj

  }

  ngOnInit(): void {
  }

  handleAddContactSubmit(): void{
    // get the form data
    console.log(this.addContactForm); // this will give you the whole form state

    console.log(this.addContactForm.value); // form data

    // 2. Send the above form data to the service
    this.employeesService.createEmployee(this.addContactForm.value)
      .subscribe( (res: any) => { // 3. Get the res from the service
        console.log(res);
        if (res && res.id ){
          this.isSaved = true;
        }
      });

  }

}
