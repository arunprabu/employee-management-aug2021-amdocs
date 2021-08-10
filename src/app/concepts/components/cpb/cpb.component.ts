import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  template: `
    <div>
      <p>Age is: {{age}}</p>
    </div>

  `,
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: Have a variable and make it a custom property
  @Input() age = 20; // @Input() makes the variable as custom property
  // Refer Concepts.comp.html for Step 2

  constructor() { }

  ngOnInit(): void {
  }

}
