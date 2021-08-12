import { Injectable } from '@angular/core';

export interface IEmployee {
  id: number;
  name: string;
  phone: string;
  email: string;
}

// can be dep injectable
@Injectable({
  providedIn: 'root'
})
export class Employee implements IEmployee {
  id: number| any;
  name: string | any;
  phone: string | any ;
  email: string | any;


  // util methods..

}
