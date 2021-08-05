import { Component } from '@angular/core';

// Decorator -- unifies html, css, ts
@Component({
  selector: 'app-root', // exposes the comp in a selector to be used in index.html -- mandatory
  templateUrl: './app.component.html', // html -- mandatory -- should be only one
  styleUrls: ['./app.component.css'] // css -- optional -- can be multiple
})
export class AppComponent {
  // ts
  title = 'employee-management-aug2021-amdocs';
}
