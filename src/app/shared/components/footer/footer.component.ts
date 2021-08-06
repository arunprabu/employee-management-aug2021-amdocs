import { Component, OnInit } from '@angular/core';

// comp with inline template and inline styles
@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p class="blueText">Copyright 2021</p>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      /* comp specific inline style */
      .blueText{
        color: blue;
        background-color: yellow;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  // ts

  constructor() { }

  ngOnInit(): void {
  }

}
