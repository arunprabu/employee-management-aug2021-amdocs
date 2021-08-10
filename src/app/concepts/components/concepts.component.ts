import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // public variables
  // string interpolation related
  appName = 'Employee Management App';

  // prop binding related
  topicName = 'Data Binding';

  // two way binding
  courseName = 'Angular';

  // for custom property binding
  myAge = 99;

  // custom event binding related
  dataReceivedFromChildComp = '';

  // directives
  isLoggedIn = true;

  skillList: Array<string> = ['ng', 'react', 'nodejs', 'python'];

  constructor() { }

  ngOnInit(): void {
  }

  // event binding
  handleClickMe(evt: Event): void{
    alert('clicked');
    console.log(evt);
    // TODO: change the label to 'Clicked'
    // TODO: disable the button on click
  }

  // Step 5 of CEB:
  handleProfileLoaded(evt: any): void{
    console.log(evt);
    this.dataReceivedFromChildComp = evt;

  }
}

